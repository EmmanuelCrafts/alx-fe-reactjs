import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile';
import { Counter } from './components/Counter';
import UserContext from './UserContext';
import ProfilePage from './components/ProfilePage';
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <Counter />
          <UserContext.Provider value={userData}>
             <ProfilePage />
          </UserContext.Provider>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography"/>
        <Footer />
      </div>
  )
}

export default App
