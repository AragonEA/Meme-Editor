import './css/App.css';
import Editor from './components/Editor';
import Selector from './components/Selector';

function App() {
  return (
    <div className="App nes-container with-title is-centered">
      <h1 className="title">Meme Editor</h1>
      <p>Select an image to add your text to it</p>
      <Editor />
      <Selector />
    </div>
  )
}

export default App;
