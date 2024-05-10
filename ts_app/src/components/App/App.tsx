import React from 'react';
import { User } from './App.types';
// export { App } from './App';

type Props = {
  user: User;
};

export  function App({ user }: Props) {
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}