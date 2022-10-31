import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = (props) => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button className={props.isNavbar? 'small-button':'signout-button' } onClick={() => logout()}>
                Logout
            </button>
        )
    )
}

export default LogoutButton
