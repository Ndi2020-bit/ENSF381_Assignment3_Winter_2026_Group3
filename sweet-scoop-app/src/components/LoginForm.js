import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayStatus from './DisplayStatus';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();

  // Redirect to /flavors after 2 seconds on success
  useEffect(() => {
    if (loginSuccess) {
      const timer = setTimeout(() => {
        navigate('/flavors');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loginSuccess, navigate]);

  async function handleLogin() {
    // Validate inputs
    if (!username || !password) {
      setMessageType('error');
      setMessage('Username and password cannot be empty.');
      return;
    }
    if (password.length < 8) {
      setMessageType('error');
      setMessage('Password must be at least 8 characters.');
      return;
    }

    // Fetch users from API
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();

      const match = users.find(
        (user) => user.username === username && user.email === password
      );

      if (match) {
        setMessageType('success');
        setMessage('Login successful! Redirecting...');
        setLoginSuccess(true);
      } else {
        setMessageType('error');
        setMessage('Invalid username or password.');
      }
    } catch (error) {
      setMessageType('error');
      setMessage('Something went wrong. Please try again.');
    }
  }

  return (
    <div className="main-section">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <a href="#">Forgot Password?</a>

      {message && <DisplayStatus type={messageType} message={message} />}
    </div>
  );
}

export default LoginForm;