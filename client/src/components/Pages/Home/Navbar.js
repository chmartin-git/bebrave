import React from 'react';
import '../../../assets/style/css/navbar.min.css'

const Navbar = () => {
    return (
            <div className="navbar">
                <div className="button-wrapper">
                    <div className="button-inner">
                        <button className="button-login">
                            CONNEXION
                        </button>
                    </div>
                    <div className="button-inner">
                        <button className="button-signup">
                            INSCRIPTION
                        </button>
                    </div>
                </div>
            </div>
    )
};

export default Navbar;
