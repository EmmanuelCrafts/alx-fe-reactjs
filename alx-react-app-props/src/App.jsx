import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import './App.css';
import UserProfile from './components/UserProfile';
import { Counter} from './components/Counter';
import { userContext } from './components/UserContext';
import ProfilePage from './components/ProfilePage';
import UserDetails from './components/UserDetails';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com"};
  return (
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <userContext.Provider value={userData}>
             <ProfilePage />
             <UserDetails />
        </userContext.Provider>
        <Counter />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography"/>
        <Footer />
      </div>
  )
}

export default App
