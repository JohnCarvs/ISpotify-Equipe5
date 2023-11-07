import React from 'react';
import { useState } from 'react'
import './App.css'
import { Favorite } from "./components/favorite"


function ListMusic() {
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
           <div id="musicList5" class="trashButton"><button onClick={() => handleRemoverItem(item.id)}>trashButton</button></div>
         </div>
       ))}
     </div>
 );
 }

function App() {

return (
 <div id="mainDIV">
      <div id="DIVGrande">
          <div id="biggerDIV">
              <img id="image" src="./spotifyPlaylist.jpeg"></img> 
              <div id="text">
                 <p id="infos1"> Playlist</p>
                 <p id="infos2"> Daily MIX 1</p>
                 <p id="infos3"> Red Hot Chili Peppers, Coldplay e mais</p>
                 <p id="infos4"> Spotify - 50 músicas <p id="infos5">1h  7min</p></p> 
              </div>
          </div>

          <div id="buttonsDIV">
              <div id="buttons">PLAY</div>
              <div id="buttons"><Favorite/></div>
              <div id="buttons">DOWNLOAD</div>
              <div id="buttons">RETICENCIAS</div>
          </div>

          <div id="headerDIV">
              <div id="header1">#TÍTULO</div>
              <div id="header2">ÁLBUM</div>
              <div id="header3">RELOGIO</div>
          </div>
          <div id="line"></div>
      </div>
      

      <div id="App">
          <ListMusic />
      </div>
 </div>
  
)
}

export default App;
