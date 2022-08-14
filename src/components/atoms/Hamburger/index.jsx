import React from "react";
import {DropDown} from '../../molecules'



export const Hambuger =()=>{
    const onClick = (e)=>{
        e.target.classList.toggle('hamburger-circle-new')
        e.target.children[0].classList.toggle('new-ham1')
        e.target.children[1].classList.toggle('new-ham2');
        console.log(DropDown.children)

    }
    return(
        <div onClick={onClick}>
            <div className="hamburger-circle">
                <div className="hamburgers"></div>
                <div className="hamburgers"></div>
            </div>
        </div>
    )
}