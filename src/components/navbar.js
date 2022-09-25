import React, { useState, useEffect } from "react";
import '../App.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
            <div className="container-fluid">
                <span className="navbar-brand mx-4"  href="#">TO-GATHER</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <a className="nav-link " aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/chatroom">Discussion</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu mx-2">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                    </ul>
                    <form className="d-flex" action="/login-signup">
                            <input className="btn coral-class m-2" type={"submit"} value="Login"></input>
                            <input className="btn coral-class m-2" type={"submit"} value="Sign up"></input>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;