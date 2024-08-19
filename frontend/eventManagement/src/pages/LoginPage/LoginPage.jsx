import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountForm from "../../components/AccountForm/AccountForm";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/main");
    }
  }, [navigate]);

  async function handleLogin(e) {
    e.preventDefault();

    const body = {
      username,
      password,
    };

    try {
      const response = await axios.post(`${API_HOST}/login`, body);
      localStorage.setItem("token", response.data.token);

      navigate("/main");
    } catch (error) {
      alert(error.response.data.error);
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <AccountForm
        onSubmit={handleLogin}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        action={"Login"}
      />
      <p>
        Don&apos;t have an account? <a href="/register">Register now!</a>
      </p>
    </div>
  );
}
