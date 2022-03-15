//prettier-ignore
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ClassComponent from "./Components/ClassComponent";
import NotFoundComponent from "./Components/NotFoundComponent";
import FunctionComponent from "./Components/FunctionComponent";
import MultiComponent from "./Components/MultiComponent";
import FormComponent from "./Components/FormComponent";
import MultiStepForm from "./Components/Form/MultiLevelForm";
import CounterHooks from "./Components/Hooks/CounterHooksComponent";

const messages = { message1: "I am Message 1", message2: "I am Message 2" };

function App() {
  return (
    <div className="App">
      <Router>
        <div className="centerDiv">
          <h2>Welcome to React Tutorial</h2>
          <nav className="sidenav">
            <Link to={"/propertyClass"} className="nav-link">
              <button className="navButtonStyle" type="button">
                Class Component
              </button>
            </Link>
            <Link to={"/propertyFunction"} className="nav-link">
              <button className="navButtonStyle" type="button">
                Function Component
              </button>
            </Link>
            <Link to={"/multiComponent"} className="nav-link">
              <button className="navButtonStyle" type="button">
                Multi Component
              </button>
            </Link>
            <Link to={"/formComponent"} className="nav-link">
              <button className="navButtonStyle" type="button">
                Form Component
              </button>
            </Link>
            <Link to={"/multiStepFormComponent"} className="nav-link">
              <button className="navButtonStyle" type="button">
                Multi Step Form
              </button>
            </Link>
            <Link to={"/hooks"} className="nav-link">
              <button className="navButtonStyle" type="button">
                Hooks
              </button>
            </Link>
            <Link to={"/redux"} className="nav-link">
              <button className="navButtonStyle" type="button">
                Redux
              </button>
            </Link>
            <Link to={"/apps"} className="nav-link">
              <button className="navButtonStyle" type="button">
                Applications
              </button>
            </Link>
          </nav>
          <hr />
          <Routes>
            <Route
              exact
              path="/propertyClass"
              element={
                <ClassComponent name="Pankaj" age="40" messages={messages} />
              }
            />
            <Route
              exact
              path="/propertyFunction"
              element={
                <FunctionComponent
                  firstName="Pankaj"
                  lastName="Mishra"
                  age="40"
                />
              }
            />

            <Route exact path="/multiComponent" element={<MultiComponent />} />
            <Route exact path="/formComponent" element={<FormComponent />} />
            <Route exact path="/hooks" element={<CounterHooks />} />
            <Route
              exact
              path="/multiStepFormComponent"
              element={<MultiStepForm />}
            />
            <Route exact path="*" element={<NotFoundComponent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
