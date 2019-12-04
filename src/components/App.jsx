import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './styles';

const App = () => (
  <Nav>
    <NavLink
      activeStyle={{
        color: 'fuchsia',
        textDecoration: 'none',
        fontWeight: '500',
      }}
      style={{
        marginRight: '16px',
        color: 'inherit',
        textDecoration: 'none',
        fontWeight: '500',
      }}
      to="/"
      exact
    >
      Home
    </NavLink>
    <NavLink
      activeStyle={{
        color: 'fuchsia',
        textDecoration: 'none',
        fontWeight: '500',
      }}
      style={{ color: 'inherit', textDecoration: 'none', fontWeight: '500' }}
      to="/movies"
    >
      Movie
    </NavLink>
  </Nav>
);

export default App;
