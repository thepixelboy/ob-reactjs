import logo from "./logo.svg";
import "./App.css";
import Ejemplo4 from "./hooks/ejemplo4";
// import MiComponenteConContexto from "./hooks/ejemplo3";
// import Greeting from "./components/pure/greeting";
// import GreetingF from "./components/pure/greetingF";
// import TaskListComponent from "./components/containers/task_list";
// import Contact from "./components/containers/contact";
// import Ejemplo1 from "./hooks/ejemplo1";
// import Ejemplo2 from "./hooks/ejemplo2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="John Doe"></Greeting> */}
        {/* <GreetingF name="John Doe"></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <Contact></Contact> */}
        {/* Ejemplos de uso de Hooks 👇🏻*/}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 nombre="John Doe">
          {/* Todo lo que hay aquí dentro es tratado como props.children */}
          <h3>Contenido del props.children</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
