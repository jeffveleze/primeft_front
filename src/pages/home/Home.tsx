import { Profile } from '../Profile/Profile';
import { HomeContainer, HomeTitle } from './Home.styles';
import { Login } from './Login/Login';

export type HomeProps = {
  title: string;
};

export const Home = ({ title }: HomeProps) => {
  return (
    <HomeContainer>
      <HomeTitle>{title}</HomeTitle>
      <Login />
      <Profile />
    </HomeContainer>
  );
};
