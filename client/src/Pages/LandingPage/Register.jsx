import React, { useState } from "react";
import { signUp } from "../../tools/useAxios";
import {useNavigate} from "react-router-dom";
import Logo from "../../components/Logo/flipaQ_logo.jpeg";
console.log (Logo)

export const Register = (props) => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const user = await signUp({username, password: pass});
      navigate("/home", {state: {user}})
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="auth-form-container">
      <img className="logo" src={Logo} alt="Logo" />
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
          name="username"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
