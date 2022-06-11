import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home'
import Plants from '../src/components/plants'
import Clothes from '../src/components/clothes'
import Beauty from '../src/components/beauty';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/plants' element={<Plants />} />
        <Route path='/clothes' element={<Clothes />} />
        <Route path='/beauty' element={<Beauty />} />
        <Route path='*' element={<Home />} />
      </Routes>

      <nav className="navbar head navbar-expand-lg fixed-top">
        <a href="/home"><img src={require("../src/img/variedades.png")} alt="Logo" id='logo' /></a>
        <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon img"></span>
        </button>
        <div className="collapse navbar-collapse had" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="header active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="header" to="/plants">Plantas</Link>
            </li>
            <li className="nav-item">
              <Link className="header" to="/clothes">Ropa</Link>
            </li>
            <li className="nav-item">
              <Link className="header" to="/beauty">Belleza</Link>
            </li>
          </ul>
        </div>
      </nav>

      

      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Productos</h3>
                <ul>
                  <li><a href="/plants">Plantas</a></li>
                  <li><a href="/beauty">Belleza</a></li>
                  <li><a href="/Ropa">Ropa</a></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>Acerca de</h3>
                <ul>
                  <li><a href="">Compañia</a></li>
                  <li><a href="">Equipo</a></li>
                  <li><a href="">Facebook</a></li>
                </ul>
              </div>
              <div className="col-md-6 item">
                <h3>Variedades Guirnalda</h3>
                <p>Vendemos varios productos a buen precio, si quiere alguna sugerencia que hacernos estaremos encantados de tomarla en cuenta</p>
              </div>
              <div className="col item social"><a href=""><i className="icon ion-social-facebook"></i></a><a href=""><i className="icon ion-social-twitter"></i></a><a href=""><i className="icon ion-social-snapchat"></i></a><a href=""><i className="icon ion-social-instagram"></i></a></div>
            </div>
            <p className="copyright">Variedades Guirnalda © 2018</p>
          </div>
        </footer>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"></link>
    </div>

  );
}

export default App;
