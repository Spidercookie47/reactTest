import React from 'react';
import './SplashScreen.css';
import logo from './assets/Ozex-brand_logo-preliminaire.png'; // Consider organizing assets in dedicated folders

// Props interface detailing the structure and types of expected props
interface SplashScreenProps {
  transition: boolean; // Indicates if the logo should transition upwards
}

// SplashScreen functional component
const SplashScreen: React.FC<SplashScreenProps> = ({ transition }) => {
  return (
    <div className="splash-container">
      <img 
        src={logo}
        alt="Ozex Logo"
        // Apply 'logo-up' class to animate the logo if the transition prop is true
        className={`splash-logo ${transition ? 'logo-up' : ''}`} 
      />
    </div>
  );
};

export default SplashScreen;
