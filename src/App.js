import HomeComponent from './pages/Home';
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import SurahDetailComponent from './components/SurahDetail';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>

        <Route path="/" exact component={HomeComponent} />
        <Route path="/surah/:id" component={SurahDetailComponent} />

      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
