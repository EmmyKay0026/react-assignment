import React from 'react'
import { Hambuger, Logo, NavLinksDesk } from '../../atoms'

export const NavBar = ()=>{
    return(
        <nav>
            <Logo />
            <NavLinksDesk/>
            <Hambuger/>
        </nav>
    )
}