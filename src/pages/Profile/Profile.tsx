import { useAuth0 } from '@auth0/auth0-react';
import {
  StyledEmail,
  StyledName,
  StyledProfileContainer,
} from './Profile.styles';

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <StyledProfileContainer>
      <img src={user?.picture} alt={user?.name} />
      <StyledName>{user?.name}</StyledName>
      <StyledEmail>{user?.email}</StyledEmail>
    </StyledProfileContainer>
  ) : null;
};
