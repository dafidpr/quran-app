import Home from './pages/Home';
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import Surah from './pages/Surah';
import Tafsir from './pages/Tafsir';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>

        <Route path="/" exact component={Home} />
        <Route path="/surah/:id" component={Surah} />
        <Route path="/tafsir/:id" exact component={Tafsir} />

      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
