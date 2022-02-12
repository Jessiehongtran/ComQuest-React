import logo from './logo.svg';
import { Canvas, useFrame } from 'react-three-fiber';
import './App.css';
import Box from './components/box'

function App() {
  return (
    <div className="App">
      <Canvas>
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
