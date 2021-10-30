import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AuthProvider from "./context/AuthProvider";
import Register from "./components/Register/Register";
import Cars from "./components/Cars/Cars";
import CarDetails from "./components/CarDetails/CarDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ManageAllBookings from "./components/ManageAllBookings/ManageAllBookings";
import AddNewCar from "./components/AddNewCar/AddNewCar";
import MyBookings from "./components/MyBookings/MyBookings";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/cars">
              <Cars></Cars>
            </Route>
            <PrivateRoute path="/carsDetails/:carId">
              <CarDetails></CarDetails>
            </PrivateRoute>
            <PrivateRoute path="/allBookings">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>
            <PrivateRoute path="/addCar">
              <AddNewCar></AddNewCar>
            </PrivateRoute>
            <PrivateRoute path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
