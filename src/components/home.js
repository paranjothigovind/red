import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'

const Home = () => {
    return(
        <Fragment>
            <Helmet>
                <title>Red Chariot</title>
            </Helmet>
            <div id="home">
                <section>
                    <div style={{textAlign:"center"}}>
                        <img src={logo}></img>
                    </div>
                    <div className="play-button-container">
                        <ul>
                            <li><Link  className="play-button" to="/play">Play</Link></li>
                        </ul>
                    </div>
                    <div className="auth-container">
                        {/* <Link className="auth-button" id="login-button" to="/login">Login</Link>
                        <Link className="auth-button" id="signup-button" to="/register">Register</Link> */}
                    </div>
                </section>
            </div>
        </Fragment>
    )
}
export default Home;