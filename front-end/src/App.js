import React, { useEffect } from 'react'; // Add the missing import statement for useEffect
import './App.css';
import MenuBar from './shared/MenuBar';
import BuilderComponent from './pages/BuilderComponent';

function App() {

  useEffect(() => {
    fetch('/hi')
      .then(response => response.text())
      .then(data => console.log(data));

    fetch('/api/pc')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <MenuBar />
      <BuilderComponent />
    </div>
  );
}

export default App;
