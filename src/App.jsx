import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Tecnologies from './components/Technologies';
import ScrollButton from './components/ScrollButton';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <ScrollButton />
      <Tecnologies />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
