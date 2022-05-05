import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from './components/LoginButton';
import { LogoutButton } from './components/LogoutButton';
import { StyledLoginContainer } from './Login.styles';

export const Login = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <StyledLoginContainer>
      {isAuthenticated && !isLoading ? <LogoutButton /> : <LoginButton />}
    </StyledLoginContainer>
  );
};
