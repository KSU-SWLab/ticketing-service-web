import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './error-page';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

import styled from 'styled-components';
import { Outlet, Link } from 'react-router-dom';

function Layout(): JSX.Element {
  return (
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </Nav>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  height: 2rem;
  padding: 0 1rem;

  /* gradation */
  background: linear-gradient(90deg, #5f5da6, #8f8ebf, #2e4159);
`;

const NavLink = styled(Link)`
  font-weight: 700;

  color: #fff;

  &:hover {
    color: #262626;
  }
`;

export default App;
