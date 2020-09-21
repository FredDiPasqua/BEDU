import React, { useState } from 'react';
import SignUp from './SignUp'
import '../assets/styles/components/LogIn.scss';

const LogIn = () => {
    const [user, setUser] = useState(true);
    const [recovery, setRecovery] = useState(false);
    if (user & !recovery) {
        return (
            <>
                <h2>Inicia sesión</h2>
                <form className="form" action="">
                    <p className="p" >Nombre de usuario</p>
                    <input className="inputs" type="text"/>
                    <p className="p" >Contraseña</p>
                    <input className="inputs" type="password"/>
                    <p className="passwordRecovery" onClick={() => {setRecovery(true)}} >Olvidé mi contraseña</p>
                    <button className="submitBtn" >Entrar</button>
                </form>
                <p className="createAccount" onClick={() => {setUser(false)}} >Crear mi cuenta</p>
            </>
    
        )
    }
    else if (recovery) {
        return (
            <h2>Te hemos enviado un correo 📫</h2>
        )
    }
    else {
        return (
            <SignUp />
        )
    }
};

export default LogIn;