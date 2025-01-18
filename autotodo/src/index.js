import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(<App />);
