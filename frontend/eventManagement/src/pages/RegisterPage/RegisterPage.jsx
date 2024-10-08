import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AccountForm from "../../components/AccountForm/AccountForm";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerSuccessful, setRegisterSuccessful] = useState(false);

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    const body = {
      username,
      password,
    };

    try {
      await axios.post(`${API_HOST}/register`, body);
      setRegisterSuccessful(true);

      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      alert(error.response.data.error);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Register</h1>
      <AccountForm
        onSubmit={handleRegister}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        action={"Register"}
      />
      <p>
        Already have an account? <a href="/login">Login now!</a>
      </p>
      {registerSuccessful && (
        <p style={{ color: "limegreen" }}>
          Registration successful. You will be redirected to the Login Page
          shortly.
        </p>
      )}
    </div>
  );
}
