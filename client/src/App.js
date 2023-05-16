import './App.css';
import NavBar from './components/Navbar/Navbar';
import { Form, Detail, Home, Dogs } from "./views"
import { Route, useLocation } from 'react-router-dom'

function App() {

  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !== "/form" && <NavBar />}
      <Route exact path="/" component={Home}/>
      <Route exact path="/dogs" component={Dogs}/>
      <Route path="/detail" component={Detail}/>
      <Route path="/form" component={Form}/>
    </div>
  );
}

export default App;
