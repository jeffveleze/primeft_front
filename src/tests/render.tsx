import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import ThemeProvider from '../theme/ThemeProvider';

export const renderWith = (component: ReactElement) => {
  return render(component, {
    wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
  });
};
