import React from 'react';
import { NavLink } from 'react-router-dom';

const App = () => (
  <nav>
    <NavLink activeStyle={{ color: 'purple', textDecoration: 'none' }} to="/">
      Home
    </NavLink>
    <NavLink
      activeStyle={{ color: 'purple', textDecoration: 'none' }}
      to="/movies"
    >
      Movie
    </NavLink>
  </nav>
);

export default App;
