
import Hero from '../components/Hero/Hero';
import Box from '../components/Box/Box';
import Head from '../components/Header/header';
import Cards from '../components/Cards/Cards';
import Questions from '../components/Questions/Questions';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

function Homepage() {
  return (
    <div className="App">
      <Head />
     <Hero />
     <Box />
    <Cards />
    <Questions />
    <Contact />
    <Footer />
    
    </div>
  );
}
export default Homepage;