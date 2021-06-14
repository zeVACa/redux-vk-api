import React from 'react';
import { useSelector } from 'react-redux';

import * as css from './header.module.css';

function Header() {
  const user = useSelector((state) => state.user);

  return (
    <header>
      <div className={`${css.header} container`}>
        <h1>Мой топ фото</h1>
        <h5>user: {user.name}</h5>
      </div>
    </header>
  );
}

export default Header;
