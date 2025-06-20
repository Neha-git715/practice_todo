//step 5
// //auth
import React, { useState } from 'react';

function RegisterForm({ onRegister, onSwitchToLogin, error, setError }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        onRegister();
      } else {
        setError(data.error || 'Registration failed');
      }
    } catch {
      setError('Network error');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={register}>
        <input
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit" disabled={loading}>Register</button>
      </form>
      <button onClick={onSwitchToLogin}>Back to Login</button>
    </div>
  );
}

export default RegisterForm;
