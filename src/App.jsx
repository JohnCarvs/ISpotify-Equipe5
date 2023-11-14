import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="SideBar">
        <p className="iSpotify" id="iSpotify">iSpotify®</p>
        <div id="links">
          <Link to="Playlist" id="playlist" class="myLink">Playlist</Link>
          <p></p>
          <Link to="test" id="test1" class="myLink">Artistas</Link>
          <p></p>
          <Link to="favorites" id="favoriteSongs" class="myLink"><span id="favoriteSymbol" class="material-symbols-outlined">favorite</span>  Músicas Curtidas</Link>
        </div>
      </div>
      <div className="Outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

