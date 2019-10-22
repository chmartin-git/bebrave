import React from 'react';

const LoginInputs = props => (
        <form className="input-inner">
            <div className="input-wrapper">
                <input type="text" name="pseudo" id="pseudo" placeholder=" IDENTIFIANT " autocomplete="username" onChange={(e) => props.changeHandler(e.target)}/>
            </div>
            <div className="input-wrapper">
                <input type="password" name="password" id="password" placeholder=" MOT DE PASSE " onChange={(e) => props.changeHandler(e.target)} />
            </div>
        </form>
);

export default LoginInputs
