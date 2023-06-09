import { Fragment } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import UserProfile from './components/UserProfile'

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
