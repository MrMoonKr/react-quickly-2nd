const path  = require( 'path' ) ;
const fs    = require( 'fs' ).promises ;

const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CopyPlugin = require( 'copy-webpack-plugin' );


const CHAPTER_PARENT = path.join( __dirname, 'src/' ) ;
const CHAPTER_LIST = [
    'ch01' ,
    'ch02' ,
    //'ch07' ,
] ;
const HTML_TEMPLATE = './src/template.html' ;


module.exports = async () => {

    const { generatedEntries, generatedPlugins } =
        await getDirectoryEntries( CHAPTER_PARENT, CHAPTER_LIST, HTML_TEMPLATE ) ;

    return {

        mode: 'development',

        entry: {
            //main: './src/main.js',

            ...generatedEntries,
        },

        output: {
            path: path.join( __dirname, 'dist' ),

            //filename: 'js/[name].[contenthash:8].js'
            filename: function( pathData, assetInfo ) {
                // console.log( 'pathData : ' );
                // console.log( pathData ) ;
                // console.log( 'assetInfo : ' );
                // console.log( assetInfo ) ;

                const parent   = pathData.chunk.name.substr( 0, 4 ) ;
                const name     = pathData.chunk.name ;
                const ext      = '.bundle.js';
                const fileName = path.join( 'js', parent, name + ext ) ;
                console.log( '출력파일 : ' + fileName ) ;
                return fileName ;
            }
        },

        //devtool: 'source-map' ,
        devtool: 'inline-cheap-module-source-map',

        //watch: true,

        plugins: [
            new CleanWebpackPlugin() ,

            // new CopyPlugin( {
            //     patterns: [
            //         { 
            //             from: 'public',
            //             //to: '',
            //             filter: ( source ) => !source.includes( 'index.html' ) && !source.includes( 'email.html' )
            //         }
            //     ]
            // } ),

            // new HtmlWebpackPlugin( {
            //     template: './src/template.html'
            // } )

            ...generatedPlugins,

            // new HtmlWebpackPlugin( {
            //     template: './src/template.html'
            // } )
        ],

        resolve: {
            extensions: [ '.js' ]
        },

        devServer: {
            static: {
                directory: path.join( __dirname, 'dist' )
            },
            hot: true,
            port: 8090
        }

    }

}


/**
 * 챕터 목록으로 부터 webpack용 entry 객체 및 html plugin 목록 생성
 * @param {string} parentPath 상위 부모 디렉토리명
 * @param {Array<string>} chapters 챕터 디렉토리명 목록 ex) [ 'ch01', 'ch02', 'ch03', ] 
 * @param {string} template 템플릿 html 페이지 경로 ex) './src/template.html'
 */
const getDirectoryEntries = async ( parentPath, chapters, template='./src/template.html' ) => {

    const generatedPlugins = [] ;
    const generatedEntries = {} ;

    for ( const chapter of chapters )
    {
        const entries = await fs.readdir( parentPath + chapter, {
            withFileTypes: true,
            recursive: false
        } ) ;

        const candidates = entries.filter( ( entry ) => {
            return entry.name.endsWith( '.js' ) ;
        } ) ;

        for ( const candiate of candidates ) {

            const name   = path.parse( candiate.name ).name ;
            const plugin = new HtmlWebpackPlugin( {
                //filename: chapter + '/' + name + '.html' ,
                filename: path.join( chapter, name + '.html' ),
                chunks: [name] ,
                template: template
            } ) ;

            generatedEntries[ name ] = {
                //import: parentPath + chapter + '/' + candiate.name 
                import: path.join( parentPath, chapter, candiate.name )
            }

            generatedPlugins.push( plugin ) ;

        }
    }

    return { generatedEntries, generatedPlugins }
}