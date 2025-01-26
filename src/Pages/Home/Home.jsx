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
  const cont = products.length;
  return (
    <>
      <Layout>
        <h2 className="text-center mt-4 mb-4">Existe {cont} productos en stock </h2>
        <article>
          {products.map((product) => {
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
