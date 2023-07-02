import { useAuth } from 'hooks/useAuth';
import {
  Logo,
  MainNav,
  MainNavItem,
  MainNavLink,
  MainNavList,
} from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Logo to="/">
        PhoneBook.
      </Logo>
      <MainNav>
        {isLoggedIn && (
          <MainNavList>
            <MainNavItem>
              <MainNavLink to="/contacts">Contacts</MainNavLink>
            </MainNavItem>
          </MainNavList>
        )}
      </MainNav>
    </>
  );
};

export default Navigation;