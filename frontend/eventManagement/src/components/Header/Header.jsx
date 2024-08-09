import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [haveToken, setHaveToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setHaveToken(false);
    } else {
      setHaveToken(true);
    }
  }, [navigate]);

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
    setHaveToken(false);
  }

  return (
    <header className="flex-sb">
      <img
        src="https://i.imgur.com/ZIHXiSS.png"
        alt="Logo"
        onClick={() => navigate("/")}
      />
      <div className="padding-20">
        {!haveToken && <a href="/register">Register</a>}
        {!haveToken && <a href="/login">Login</a>}
        {haveToken && <a href="/main">Attendees</a>}
        {haveToken && <button onClick={logout}>Logout</button>}
      </div>
    </header>
  );
}
