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
          <Link to="Artists" id="test1" class="myLink">Artistas</Link>
          <p></p>
          <Link to="favorites" id="favoriteSongs" class="myLink"><span id="favoriteSymbol" class="material-symbols-outlined">favorite</span>  Músicas Curtidas</Link>
          <p></p>
          <Link to="Register" id="test1" class="myLink">Register</Link>
          <p></p>
          <Link to="Login" id="test1" class="myLink">Login</Link>
        </div>
      </div>
      <div className="Outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

