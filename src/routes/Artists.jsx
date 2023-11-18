import React from "react";
import "./Artists.css";
import biquini from "./imagens/biquini1.png";
import capital from "./imagens/capital1.png";
import cazuza from "./imagens/cazuza1.png";
import cidade from "./imagens/cidade1.png";
import engenheiros from "./imagens/engenheiros1.png";
import kid from "./imagens/kid1.png";
import lulu from "./imagens/lulu1.png";
import paralamas from "./imagens/paralalamas1.png";
import rappa from "./imagens/rappa1.png";
import skank from "./imagens/skank1.png";

function Test() {
  const artistas = [
    { name: "Engenheiros do Hawaii", src: engenheiros },
    { name: "Cidade Negra", src: cidade },
    { name: "Capital Inicial", src: capital },
    { name: "Skank", src: skank },
    { name: "Paralamas de Sucesso", src: paralamas },
    { name: "Lulu Santos", src: lulu },
    { name: "Cazuza", src: cazuza },
    { name: "KID Abelha", src: kid },
    { name: "Biquini Cavadão", src: biquini },
    { name: "O Rappa", src: rappa },
  ];

  const artistasSection = artistas.map((artistUnit, index) => {
    return (
      <div id="flex-box" key={index}>
        <img
          id="imagemArtistas"
          src={artistUnit.src}
          alt={`Imagem ${artistUnit.id}`}
        ></img>
        <br></br>
        <br></br>
        <div id="nomeArtistas">{artistUnit.name}</div>
        <br></br>
        <div id="artist">Artista</div>
      </div>
    );
  });

  return (
    <div id="page2">
      <h1>Artistas</h1>
      <div class="flex-box" id="artistsBOX">
        {artistasSection}
      </div>
    </div>
  );
}

export default Test;
