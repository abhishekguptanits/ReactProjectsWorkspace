import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
  { id: "p4", title: "Best Seller" },
];

const Products = () => {
  return (
    <>
      <h1>Products Page!</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link style={{ color: "olive" }} to={product.id}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link style={{ color: "white" }} to="../">
        Home
      </Link>
    </>
  );
};

export default Products;
