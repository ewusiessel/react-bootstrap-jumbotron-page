import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";
import MyJumbotron from "./components/Jumbotron";

function App() {
  return (
    <div>
      <NavigationBar title="My Book Store" />
      <MyJumbotron />
    </div>
  );
}

export default App;
