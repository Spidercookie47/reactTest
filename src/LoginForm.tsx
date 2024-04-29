// LoginForm.tsx
import React, { useState } from 'react';
import './LoginForm.css';

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className = '' }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for form submission status

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(false); // Reset submission status
    let valid = true;

    setErrors({ username: '', password: '' });

    if (!username) {
      setErrors(prevErrors => ({ ...prevErrors, username: 'Le nom d\'utilisateur est requis.' }));
      valid = false;
    } else if (!validateEmail(username)) {
      setErrors(prevErrors => ({ ...prevErrors, username: 'Veuillez entrer un email valide.' }));
      valid = false;
    }

    if (!password) {
      setErrors(prevErrors => ({ ...prevErrors, password: 'Le mot de passe est requis.' }));
      valid = false;
    }

    if (valid) {
      console.log('Form is valid! Submitting...', { username, password });
      setIsSubmitted(true); // Set form as submitted successfully
      // Here you could also call an API to submit the form data
    }
  };

  return (
    <div className={`login-form ${className}`}>
      {isSubmitted ? (
        <div className="success-message">Connexion réussie !</div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            className={`login-input ${errors.username ? 'input-error' : ''}`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <div className="error-message">{errors.username}</div>}

          <input
            type="password"
            placeholder="Mot de passe"
            className={`login-input ${errors.password ? 'input-error' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error-message">{errors.password}</div>}

          <button type="submit" className="login-button">S'IDENTIFIER</button>

          <p className="signup-prompt">
            Vous n'avez pas de compte? <a href="/signup" className="signup-link">Inscrivez-vous</a> maintenant.
          </p>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
