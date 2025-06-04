import './App.css';
import React from 'react';
import Card from './Component/card';
import image from "./Component/image.png"

function App() {
  return (
    <div style={{ pading: '20px' }}>
      <h1>Camera</h1>
      <Card 
        name="Camera" 
        price={29999} 
        imageUrl="image.png" 
      />
    </div>
  );
}

export default App;
