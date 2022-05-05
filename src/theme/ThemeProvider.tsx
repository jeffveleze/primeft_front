import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from './design-tokens';
import TokenVariables from './token-variables';
import Typography from './typography';

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  return (
    <StyledThemeProvider theme={theme}>
      <TokenVariables />
      <Typography />

      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
