import './css/App.css';
import Editor from './components/Editor';
import Selector from './components/Selector';

function App() {
  return (
    <div className="App nes-container with-title is-centered">
      <h1 className="title"><i class="nes-icon is-small star"></i> Meme Editor  <i class="nes-icon is-small star"></i></h1>
      <p>Select an image to add your text to it</p>
      <Editor />
      <Selector />
    </div>
  )
}

export default App;
