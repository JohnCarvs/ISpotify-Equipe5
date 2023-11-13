import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="SideBar">
        <p className="outlet">navbar</p>
        <Link to="Playlist">Playlist</Link>
        <p />
        <Link to="test">teste</Link>
      </div>
      <div className="Outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
