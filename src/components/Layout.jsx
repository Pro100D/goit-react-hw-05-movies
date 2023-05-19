import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutNav, StyledLink } from './styledCss/Layout.styled';

const Layout = () => {
  return (
    <>
      <LayoutNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </LayoutNav>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
