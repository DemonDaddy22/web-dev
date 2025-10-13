import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './components/Button';

const App = () => (
  <div>
    <h2>Remote App</h2>
    <Button>Remote Button</Button>
  </div>
);

const container = document.getElementById('root');
if (!container) {
  console.error('Root element not found');
} else {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
