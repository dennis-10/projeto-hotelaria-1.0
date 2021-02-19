import React from 'react'
import '../styles/Menu.css'

export default function Menu(props){

    return(
        <aside className='Menu-lateral'>
            <nav>
                <ul>
                    <li>
                        <a href='home'>Home</a>
                    </li>
                    <li>
                        <a href='opcao1'>Eventos</a>
                    </li>
                    <li>
                        <a href='opcao2'>Cardápio</a>
                    </li>
                </ul>
            </nav>
        </aside>  
    )
}