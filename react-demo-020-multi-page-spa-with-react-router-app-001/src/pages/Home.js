import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("products");
  };

  return (
    <>
      <h1>Welcome to Home Page!</h1>
      <p>
        <Link style={{ color: "white" }} to="products">
          Products
        </Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Change Route</button>
      </p>
    </>
  );
};

export default Home;
