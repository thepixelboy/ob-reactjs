// import logo from "./logo.svg";
import "./App.css";
import AxiosCRUDExample from "./components/pure/AxiosCRUDExample";
// import AxiosExample from "./components/pure/AxiosExample";
// import FetchExample from "./components/pure/FetchExample";
// import AsyncExpample from "./components/pure/AsyncExpample";
// import ObservableExample from "./components/pure/ObservableExample";
// import RegisterFormik from "./components/pure/forms/registerFormik";
// import LoginFormik from "./components/pure/forms/loginFormik";
// import RandomColoredBox from "./components/pure/randomColor";
// import OptionalRdender from "./components/pure/optionalRdender";
// import ContactListComponent from "./components/containers/contact_list";
// import Parent from "./components/containers/parent";
// import { Clock } from "./hooks/lifecycle/Clock";
// import GreetingStyled from "./components/pure/greetingStyled";
// import Ejemplo4 from "./hooks/ejemplo4";
// import MiComponenteConContexto from "./hooks/ejemplo3";
// import Greeting from "./components/pure/greeting";
// import GreetingF from "./components/pure/greetingF";
// import Contact from "./components/containers/contact";
// import Ejemplo1 from "./hooks/ejemplo1";
// import Ejemplo2 from "./hooks/ejemplo2";

// Aplicación evolutiva
// import TaskListComponent from "./components/containers/task_list";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <Greeting name="John Doe"></Greeting> */}
      {/* <GreetingF name="John Doe"></GreetingF> */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <Contact></Contact> */}
      {/* Ejemplos de uso de Hooks 👇🏻*/}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/* <Ejemplo4 nombre="John Doe">
          <h3>Contenido del props.children</h3>
        </Ejemplo4> */}
      {/* <GreetingStyled name="John Doe"></GreetingStyled> */}
      {/* <Clock></Clock> */}
      {/* </header> */}

      {/* Gestión de eventos */}
      {/* <Parent></Parent> */}
      {/* <ContactListComponent></ContactListComponent> */}

      {/* Ejemplos de renderizado condicional */}
      {/* <OptionalRdender></OptionalRdender> */}
      {/* <RandomColoredBox></RandomColoredBox> */}

      {/* Ejemplo de uso de Formik */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}

      {/* Ejemplos de procesos asíncronos */}
      {/* <AsyncExpample></AsyncExpample> */}
      {/* <ObservableExample></ObservableExample> */}
      {/* <FetchExample></FetchExample> */}
      {/* <AxiosExample></AxiosExample> */}
      <AxiosCRUDExample></AxiosCRUDExample>

      {/* Aplicación evolutiva */}
      {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
