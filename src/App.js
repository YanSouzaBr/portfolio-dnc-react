import './App.css';
import Footer from './componentes/sections/Footer';
import Navbar from './componentes/sections/Navbar'
import Presentation from './componentes/sections/Presentation';
import Projects from './componentes/sections/Projects';
import Skills from './componentes/sections/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>

    </div>
  );
}

export default App;
