'use client';

import { decrement, increment } from '@/shared/Counter/model/reducer';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <>
      <button onClick={() => dispatch(decrement())}>Декремент</button>
      {count}
      <button onClick={() => dispatch(increment())}>Инкремент</button>
    </>
  );
}
