import React, {useState, useEffect} from 'react';

import '../styles/Login.css';

export default props => {

    const [freeze, setFreeze] = useState(0)
    const [login, setLogin] = useState(0)
    const [user, setUser] = useState("Usuario")
    const [password, setPassword] = useState("Senha")

    useEffect(function() {
       setFreeze(1);
    }, [login])

    return(

        <div className='Login'>
            <div>
                <p className='Bem-vindo'>Bem-vindo!</p>
                <div className='Login-formulario'>
                    <p>Login:</p>
                    <input type="text"
                    onChange={e => setUser(e.target.value)}/>

                    <p>Senha:</p>
                    <input type="text"
                     onChange={e => setPassword(e.target.value)}/>
                    <br></br>
                    <button id='Login-botao'
                    onClick= {() => setLogin(1) }>Entrar</button>
                    <br></br>
                    <a href='esquecesenha'> Esqueceu a senha?</a>
                    <a href='criarconta'>Criar conta</a>
                </div>
            </div>
        </div>
    )
}