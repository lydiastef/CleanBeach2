import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../../Icons/Logo.svg';
import { BiLogOut } from 'react-icons/bi';



function Navbar() {

    const logOut = () => {
        localStorage.removeItem("user")
        window.location.href = "/"
    }

    let button;
    let logout;

    if(localStorage.getItem("user") != undefined)(
        button = <li><NavLink to="/profile">Profile</NavLink></li>
    )
    else{
        button = <li><NavLink to="/signup">Profile</NavLink></li>
    }

    if(localStorage.getItem("user") != undefined)(
        logout = <li onClick={logOut}><BiLogOut/></li>
    )
    else{
    }
    

    return(
        <header>
            <NavLink to="/" >
            <img className='logo' src={Logo} alt='Logo' />
            </NavLink>
            <nav>
                <ul>
                    <li><NavLink to="/events">Events</NavLink></li>
                    {button}
                    {logout}

                </ul>

            </nav>
        </header>
    );
}

export default Navbar;