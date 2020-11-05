import Home from './pages/Home';
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import Surah from './pages/Surah';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>

        <Route path="/" exact component={Home} />
        <Route path="/surah/:id" component={Surah} />
        {/* <Route path="/surah/tafsir/:id" component={Tafsir} /> */}

      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
