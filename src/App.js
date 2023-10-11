import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/Index";

const App = () => {
  return (
    <>
      <NavBar/>
      <h1>React Router</h1>
      <Outlet />
    <footer>
      <nav>
      <ul>
        <li>
          
        </li>
      </ul>
    </nav>
    <h1>Footer</h1>
    </footer>
    </>
  );
};
export default App;
