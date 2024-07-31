import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 ;
const navigate = useNavigate ()
  const handleLogin = () => {
    const userName = "Admin";
    const pwd = "12345";
    if (email === userName && password === pwd) {
    navigate("/home");
    } else {
      alert("Oops! Wrong email or password");
    }
  };

  return (
    <div>
      <label>Username</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
