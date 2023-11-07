import { useState } from 'react'
import './App.css'
import { Favorite } from "./components/favorite"


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
        

        <div id="musicListDIV">
            <div id="musicList1">1</div>
            <div id="musicList2">
                <div id="musicList2.1">The Zephyr Song</div>
                <div id="musicList2.2">Red Hot Chili Pepers</div>
            </div>
            <div id="musicList3">By the Way</div>
            <div id="musicList4" class="favoriteButton"><Favorite/></div>
            <div id="musicList5" class="trashButton">TB</div>
        </div>
    </div>
    
  )
}

export default App
