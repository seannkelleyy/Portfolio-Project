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
      <div><NameInfoBar /></div>
      <div className='name-and-photo'><NameAndPhoto /></div>
      <div className='grid-container-bottom'>
        <div><Goals /></div>
        <div><Projects /></div>
        <div><Hobbies /></div>
      </div>
      <div><MemeSlider slides={Memes} /></div>
    </div>
  )
}

export default App;

