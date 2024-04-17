import React from 'react';
import backgroundImage from './images/campfire-background.jpg';
import './App.css';

function App() {
    const backgroundStyle = {
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      // alignItems: 'center'
    };

    return (
      <div style={backgroundStyle}>
        <h1>Demo App</h1>
      </div>
    );
}

export default App;
