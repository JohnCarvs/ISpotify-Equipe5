import { ReactPropTypes } from "react";
import React, { useState } from "react";
import './favorite.css'



export function Favorite(props){

    const [isFavorite, setFavorite] = useState(false);

    function click() {
      setFavorite(!isFavorite);
    }
  
    const buttonStyle = isFavorite ? "favorite-button on" : "favorite-button off";

    return(
        <>
            <button className={buttonStyle} onClick={click} >
                <span className="material-symbols-outlined">
                    favorite
                </span>
            </button>
        </>
    );
}


