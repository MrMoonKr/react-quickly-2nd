import { useData } from "./Context";

function Main() {
    
    const { isLoggedIn, login, logout } = useData() ;
    
    return ( 
        <main>
            <h1>Welcome to this website</h1>
            {
                isLoggedIn
                    ? <button onClick={ logout }>Logout</button>
                    : <button onClick={ login }>Login</button>
            }
        </main>
    ) ;
}

export default Main ;
