import { useAuth0 } from '@auth0/auth0-react';
import "../components/ButtonStyles.css"
const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button className='signin-button' onClick={() => loginWithRedirect()}>
                Sign In
            </button>
        )
    )
}

export default LoginButton
