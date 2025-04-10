import React from 'react';
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1> 🌟 "Desarrollo avanzado de aplizaciones de Web</h1>
      <p>Selecciona una clase para ver su contenido:</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
        <Link to="/vite">
          <button>Clase 1: Arrow function </button>
        </Link>
        <Link to="/login">
          <button>Clase 2: Login </button>
        </Link>
        <Link to="login-clase3">
          <button>Clase 3: Login + Contador + Formulario</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
