import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../components/ProductCard";
import load from "../asset/loading.gif";
import { fetchStart, fetchSuccess } from "../features/cartSlices";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState();
  const { loading } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchStart());
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        dispatch(fetchSuccess());
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Container>
        <div className="text-center">{loading && <Image src={load} />}</div>

        <Row xs={1} md={2} lg={3} className="g-4 p-3">
          {info?.map((item) => (
            <Col key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
