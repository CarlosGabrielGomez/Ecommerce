import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Card } from "../../components/Card/Card";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        // debugger;
        setProducts(data);
      });
  }, []);

  return (
    <>
      <Layout>
        <h2>A continuacion vemos el listao de productos </h2>
        <article>
          {products.map((product) => {
            // { image, }
            return (
              <>
                <Card
                  source={product.image}
                  description={product.description}
                  title={product.title}
                  price={product.price}
                />
              </>
            );
          })}
        </article>
      </Layout>
    </>
  );
};

export { Home };
