// App.tsx
import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import LoginForm from './LoginForm';
import './App.css';

const App: React.FC = () => {
  // State to manage visibility and animation transitions
  const [startTransition, setStartTransition] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    // Start the splash screen transition after 3 seconds
    const transitionTimer = setTimeout(() => {
      setStartTransition(true);
    }, 3000);

    // After 3.5 seconds, show the login form
    const loginFormTimer = setTimeout(() => {
      setShowLoginForm(true);
    }, 3500);

    // Cleanup function to clear timeouts when component unmounts
    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(loginFormTimer);
    };
  }, []);

  return (
    <div className="app">
      <SplashScreen transition={startTransition} />
      <LoginForm className={showLoginForm ? 'fade-in' : ''} />
    </div>
  );
};

export default App;
