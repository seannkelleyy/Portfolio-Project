import NameInfoBar from './Components/NameInfoBar';
import Goals from './Components/Goals';
import Hobbies from './Components/Hobbies';
import Projects from './Components/Projects';
import NameAndPhoto from './Components/NameAndPhoto';
import MemeSlider from './Components/MemeSlider';
import { Memes } from './Assets/Data/Memes'

const App = () => {

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
    </div>
  );
}

export default App;

