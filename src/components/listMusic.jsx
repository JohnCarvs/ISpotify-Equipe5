import { ReactPropTypes } from "react";
import React, { useState } from "react";
import { Favorite } from "./favorite"
import { TrashBin } from "./trashBin"



export function ListMusic() {
    const [itens, setItens] = useState([
        { id: 1, texto1: 'The Zephyr Song', texto2: 'Red Hot Chili Pepers', texto3: 'By the Way'},
        { id: 2, texto1: 'Talk', texto2: 'Coldplay', texto3: 'X&Y'},
        { id: 3, texto1: 'Cidade Negra', texto2: 'Firmamento', texto3: 'Cidade Negra Acústico MTV'},
    ]);
    
    const handleRemoverItem = (id) => {
        const newListMusic = itens.filter((item) => item.id !== id);
        setItens(newListMusic);
    };
    
    return (
        <div id="musicListDIV">
          {itens.map((item, index) => (
            <div key={item.id} style={{display: 'flex'}}>
              <div id="musicList1">{`${index + 1} `}</div>
              <div id="musicList2">
                <div id="musicList2_1">{item.texto1}</div>
                <div id="musicList2_2">{item.texto2}</div>
              </div>
              <div id="musicList3">{item.texto3}</div>
              <div id="musicList4" class="favoriteButton"><Favorite/></div>
              <div id="musicList5" class="trashButton"><div onClick={() => handleRemoverItem(item.id)}><TrashBin/></div></div>
            </div>
          ))}
        </div>
    );
    }