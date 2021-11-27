import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Pages/Shared/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Fitness from './Pages/Fitness/Fitness';
import Health from './Pages/Health/Health';
import Style from './Pages/Style/Style';
import Services from './Pages/Services/Services';
import ServiceInfo from './Pages/serviceInfo/ServiceInfo';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div>
    <AuthProvider>
            <Router>
                <Navigation></Navigation>
              <Switch>

                <Route exact path="/">
                  <Home></Home>
                </Route>

                <Route path="/home">
                  <Home></Home>
                </Route>

                <Route path="/service">
                  <Services></Services>
                </Route>
                <Route path="/fitness">
                  <Fitness></Fitness>
                </Route>
                <Route path="/health">
                  <Health></Health>
                </Route>
                <Route path="/style">
                  <Style></Style>
                </Route>
                <PrivateRoute path="/about">
                  <About></About>
                </PrivateRoute>

                <Route  path="/login">
                  <Login></Login>
                </Route>

                <Route  path="/register">
                  <Register></Register>
                </Route>

                  <PrivateRoute  path="/serviceinfo/:details">
                 
                         <ServiceInfo></ServiceInfo>
                  </PrivateRoute>

                <Route path="/*">
                <NotFound></NotFound>
                </Route>
                
              </Switch>
              <Footer></Footer>
            </Router>
    </AuthProvider>
    
    </div>
  );
}

export default App;
