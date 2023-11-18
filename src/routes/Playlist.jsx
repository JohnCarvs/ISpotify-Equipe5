import React from "react";
import { useState } from "react";
import "./Playlist.css";
import { Favorite } from "../components/favorite";
import { ListMusic } from "../components/listMusic";
import { useEffect } from "react";
import createArtist from "../services/artists/createArtist";

function Playlist() {
  const handleSubmit = () => {
    createArtist({
      name: "Rogério Skylab",
      nationality: "Brasileiro",
      image: "capa daora",
    })
      .then(async (res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="mainDIV">
      <div id="DIVGrande">
        <div id="biggerDIV">
          <img id="image" src="./spotifyPlaylist.jpeg"></img>
          <div id="text">
            <p id="infos1"> Playlist</p>
            <p id="infos2"> Daily MIX 1</p>
            <p id="infos3"> Red Hot Chili Peppers, Coldplay e mais</p>
            <p id="infos4">
              {" "}
              Spotify - 50 músicas <p id="infos5">1h 7min</p>
            </p>
            <button className="teste" onClick={handleSubmit}>Botao teste</button>
          </div>
        </div>

        <div id="buttonsDIV">
          <div class="buttonsDIV">
            <span id="button-play" class="material-symbols-outlined">
              play_circle
            </span>
          </div>
          <div class="buttonsDIV">
            <Favorite id="button-favorite" />
          </div>
          <div class="buttonsDIV">
            <span id="button-download" class="material-symbols-outlined">
              download_for_offline
            </span>
          </div>
          <div class="buttonsDIV" id="button-ellipsis">
            ...
          </div>
        </div>

        <div id="headerDIV">
          <div id="header1">#TÍTULO</div>
          <div id="header2">ÁLBUM</div>
          <div id="header3">
            <span class="material-symbols-outlined">schedule</span>
          </div>
        </div>
        <div id="line"></div>
      </div>

      <div id="App">
        <ListMusic />
      </div>
    </div>
  );
}

export default Playlist;
