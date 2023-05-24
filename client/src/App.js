import './App.css';
import NavBar from './components/Navbar/Navbar';
import { Form, Detail, Home, Dogs, Landing } from "./views"
import { Route, useLocation } from 'react-router-dom'




function App() {

  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home}/>
      <Route exact path="/dogs" component={Dogs}/>
      <Route path="/detail/:id" component={Detail}/>
      <Route path="/form" component={Form}/>

    </div>
  );
}

export default App;
