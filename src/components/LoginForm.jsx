import { useState } from "react";
import axios from "axios";
import companyLogo from "../images/gop_logo.png";

const projectID = "d3a516ec-1dc5-4d13-8d75-0c8beb98b445";

const Modal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <div className="logo-container">
          <img
            src={companyLogo}
            className="gop_logo"
            alt="Game of Phones logo"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chat</span>
            </button>
            <h2>{error}</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
