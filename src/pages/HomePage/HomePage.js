import React from 'react';
import s from './HomePage.module.css';

const HomePage = () => (
  <div className={s.container}>
    <h1 className={s.title}>
      Добро пожаловать!{' '}
      <span role="img" aria-label="Иконка приветствия">
        &#128366;
      </span>
    </h1>
  </div>
);

export default HomePage;
