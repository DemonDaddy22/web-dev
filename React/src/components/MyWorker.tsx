'use client';

import { useEffect, useState } from 'react';

const LARGE_DATA = Array.from(new Array(10000000)).map(() => Math.random());

const MyWorker: React.FC = () => {
  const [res, setRes] = useState(-1);

  useEffect(() => {
    const worker = new Worker('/worker.js');

    worker.postMessage(LARGE_DATA);

    worker.onmessage = e => {
      setRes(e.data);
    };

    return () => {
      worker.terminate();
    };
  }, []);

  return <h1>{res >= 0 ? res : 'Computing...'}</h1>;
};

export default MyWorker;
