import { useState, useEffect } from "react";
import MainLayout from "../components/MainLayout";

export default function Login() {

  useEffect(() => {
    document.title = "Las Vegas | Login";
  }, []);

  const [username, setUsername] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!username) return;

    localStorage.setItem("user", username);
    window.location.href = "/";
  };

  return (
    <MainLayout>
      <h3 className="login-text">Please enter your username to continue</h3>

      <form onSubmit={submit} className="login-form">
        <input
          type="text"
          placeholder="Enter your in-game username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="continue-btn">Continue <i className="fa fa-chevron-right"></i></button>
      </form>
    </MainLayout>
  );
}