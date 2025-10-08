import { lazy, Suspense, useState } from 'react';

const Secondary = lazy(() => import('./Secondary'));

const Main: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section>
      <h1>Main</h1>
      <button onClick={() => setToggle(prev => !prev)}>I am a Toggle</button>
      <Suspense fallback={null}>{toggle && <Secondary />}</Suspense>
    </section>
  );
};

export default Main;
