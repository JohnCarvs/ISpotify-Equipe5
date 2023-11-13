import React from "react";
import './test.css';

function Test() {
  const artistas = [
    {name: "Engenheiros do Avaí", image: ""},
    {name: "Cidade Negra", image: ""},
    {name: "Capital Inicial", image: ""},
    {name: "Skank", image: ""},
    {name: "Paralamas do Sucesso", image: ""},
    {name: "Lulu Santos", image: ""},
    {name: "Cazuza", image: ""},
    {name: "KID Abelha", image: ""},
    {name: "Biquini Cavadão", image: ""},
    {name: "O Rappa", image: ""},
  ];

  const artistasSection = artistas.map((artistUnit, index) => {
    return (
      <div id="flex-box" key={index}>
        <div id='nomeArtistas'>{artistUnit.name}</div>
        <div id='imagemArtistas'>{artistUnit.image}</div>
      </div>
    )
  });

  return (
    <div id='page2'>    
      <h1>Artistas</h1>
      <div class="flex-box" id="artistsBOX">
          {artistasSection}
      </div>
    </div>
    
  );
}

export default Test;
