import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import load from "../asset/loading.gif";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, fetchStart, fetchSuccess } from "../features/cartSlices";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.cart);

  const handleClick = () => {
    product.quantity = 1;
    dispatch(addProduct(product));
  };

  useEffect(() => {
    dispatch(fetchStart());
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        dispatch(fetchSuccess());
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center">
          <Image src={load} />
        </div>
      ) : (
        <Container className="p-3">
          <Row xs={1} md={2} className="g-4">
            <Col className="text-center">
              <Image
                src={product?.image}
                width="100%"
                style={{ maxWidth: "450px" }}
              />
            </Col>
            <Col>
              <div>
                <h2 style={{ textTransform: "uppercase" }}>
                  {product?.category}
                </h2>
                <h4>{product?.title}</h4>
                <p className="fs-5">{product?.description}</p>
                <p className="fs-4">${product?.price}</p>
                <Button variant="outline-dark" onClick={handleClick}>
                  Add Cart
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ProductDetail;
