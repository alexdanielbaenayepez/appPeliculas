import { Header } from './component/ui/header'
import {GeneroView} from "./component/genero/generoWiew";
import {MediaView} from "./component/media/mesiaWiew";
import {ProductoraView} from "./component/productora/productoraWiew";
import {TipoView} from "./component/tipo/tipoWiew";
import {DirectorView} from "./component/director/DirectorView";
import './App.css';
import {BrowserRouter, Route,  Routes} from "react-router-dom";



function App() {
  return (
      <div className="App">

        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/director" element={<DirectorView/>} />
          <Route path="/genero" element={<GeneroView/>} />
          <Route path="/mesia" element={<MediaView/>} />
          <Route path="/productora" element={<ProductoraView/>} />
          <Route path="/tipo" element={<TipoView/>} />
        </Routes>
        </BrowserRouter>

      </div>

  );
}

export default App;
