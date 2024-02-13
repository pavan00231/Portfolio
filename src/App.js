
import './App.css';
import Messanger from './Components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './Components/context/AccountProvider';
import Portfolio from './Components/Portfolio';
import { ErrorBoundary } from './Components/Error/ErrorPage';

function App() {
  const clientId = '917492552912-h2qvtigouugoedk1pi7lbhkrm3o86729.apps.googleusercontent.com'
  return (
    <ErrorBoundary>
      <GoogleOAuthProvider clientId={clientId} className="App">
        <AccountProvider>
          {/* <Portfolio /> */}
          <Messanger />
        </AccountProvider>

      </GoogleOAuthProvider>
    </ErrorBoundary>

  );
}

export default App;
