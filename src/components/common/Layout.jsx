import { Outlet } from 'react-router-dom';
import Header from './Header';
import ScrollToTopButton from './ScrollToTopButton';

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <ScrollToTopButton />
    </div>
  );
}

export default Layout;
