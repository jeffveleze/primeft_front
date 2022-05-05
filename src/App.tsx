import { Auth0Provider } from '@auth0/auth0-react';
import { Home } from './pages/home/Home';
import ThemeProvider from './theme/ThemeProvider';

export type UnitOfMeasure = {
  code: string;
  description: string;
};

const domain = 'dev-y1t5w470.us.auth0.com';
const clientId = 'fFoj5KNYpYSka1DgvT3RkU74kNZhjIAX';

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <ThemeProvider>
        <Home title='PrimeFT' />
      </ThemeProvider>
    </Auth0Provider>
  );
}

export default App;
