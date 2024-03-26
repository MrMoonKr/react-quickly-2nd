
import React from 'react';


function MenuItem( { href, icon, children } ) {
    return ( 
        <li>
            <a href={ href } className='menu-link' >
                <img src={ icon } width={ 16 } alt='' />
                { children }
            </a>
        </li>
    );
}

export default MenuItem ;
