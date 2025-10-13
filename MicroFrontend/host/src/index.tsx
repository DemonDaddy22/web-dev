import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

const RemoteButton = lazy(() => import('remoteApp/Button'));

const App = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Host App</h1>
    <Suspense fallback={<p>Loading remote button...</p>}>
      <RemoteButton>Host app button</RemoteButton>
    </Suspense>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
