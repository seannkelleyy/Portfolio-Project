import NameInfoBar from './components/NameInfoBar';
import Goals from './components/Goals';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import NameAndPhoto from './components/NameAndPhoto';
import MemeSlider from './components/MemeSlider';
import Memes from './components/Memes'
import FunAPIs from './components/FunAPIs';

function App() {

  return (
    <div className='page'>
      <NameInfoBar />
      <NameAndPhoto />
      <div className='grid-container-bottom'>
        <Goals />
        <Projects />
        <Hobbies />
      </div>
      <MemeSlider slides={Memes} />
      <FunAPIs />
    </div>
  );
}

export default App;

