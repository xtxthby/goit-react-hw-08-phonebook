import { useAuth } from 'hooks/useAuth';

import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import LoggedNav from 'components/LoggedNav/LoggedNav';

import { Header } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {/* це окремий фаіл UserMenu  і якщо людина залогінена
      то показуємо UserMenu в протилежному випадку LoggedNav 
      isLoggedIn лежить у нас в authOperation де ми 
      його помістили в файлі authSelector в функції .getIsLoggedIn*/}
      {isLoggedIn ? <UserMenu /> : <LoggedNav />}
    </Header>
  );
};
export default AppBar;