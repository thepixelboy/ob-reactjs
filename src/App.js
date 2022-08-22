import logo from "./logo.svg";
import "./App.css";
// import Greeting from "./components/pure/greeting";
// import GreetingF from "./components/pure/greetingF";
// import TaskListComponent from "./components/containers/task_list";
import Contact from "./components/containers/contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="John Doe"></Greeting> */}
        {/* <GreetingF name="John Doe"></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        <Contact></Contact>
      </header>
    </div>
  );
}

export default App;
