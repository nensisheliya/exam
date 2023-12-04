import React from 'react';
import './navbar.css';
import '../Pages/stylesheet.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="flex">
                        <NavLink to='/'><h1 id='Logo'>Logo</h1></NavLink>
                        <nav className='flex'>
                            <Link to='/'><h4>Home</h4></Link>
                            <Link to='/service'><h4>Service</h4></Link>
                            <Link to='/About'><h4>About</h4></Link>
                            <Link to='/contact'><h4>Contact</h4></Link>
                        </nav>
                        <NavLink to='/login'><h3>Login</h3></NavLink>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Navbar