import { ReactPropTypes } from "react";
import React, { useState } from "react";
import './trashBin.css'



export function TrashBin(props){

    const [isDeleted, setDeleted] = useState(false);

    function click() {
        setDeleted(!isDeleted);
    }
  
    const buttonStyle = isDeleted ? "deleted-button on" : "deleted-button off";

    return(
        <>
            <button className={buttonStyle} onClick={click} >
                <span className="material-symbols-outlined">
                    delete
                </span>
            </button>
        </>
    );
}


