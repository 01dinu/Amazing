import React from 'react';

export default function Header(props) {
  const { countCartItems } = props;
  return (
    <header class="row block center">
      <div>
        <a href="#/">
          <h1> Small shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin">SignIn</a>
      </div>
    </header>
  );
}
