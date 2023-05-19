import NameInfoBar from './NameInfoBar';
import Goals from './Goals';
import Hobbies from './Hobbies';
import Projects from './Projects';
import NameAndPhoto from './NameAndPhoto';
import MemeSlider from './MemeSlider';
import Memes from './Memes'

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
    </div>
  )
}

export default App;

