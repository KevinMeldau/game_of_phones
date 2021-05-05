import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="d3a516ec-1dc5-4d13-8d75-0c8beb98b445"
      // userName={localStorage.getItem("username")}
      userName="Kevin_Meldau"
      // userSecret={localStorage.getItem("password")}
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
