'use client';
import { useDispatch, useSelector } from 'react-redux';
import styles from './page.module.css';
import { AppDispatch, RootState } from '@/state/store';
import { decrement, incrementAsync, incrementByAmount } from '@/state/slices/counterSlice';

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>{count}</h1>
        <div className={styles.buttons}>
          <button onClick={() => dispatch(incrementAsync(10))}>Increase</button>
          <button onClick={() => dispatch(decrement())}>Decrease</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>Increase by 5</button>
        </div>
      </main>
    </div>
  );
}
