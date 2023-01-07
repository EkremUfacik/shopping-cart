import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const navigate = useNavigate();

  return (
    <Card
      className="text-center p-2 shadow product"
      style={{ height: "400px" }}
      onClick={() => navigate(`details/${item.id}`)}
    >
      <Card.Img
        className="h-50"
        variant="top"
        src={item.image}
        style={{ objectFit: "contain", maxHeight: "250px" }}
      />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
      </Card.Body>
      <Card.Text className="fs-4 pb-3 text-center">${item.price}</Card.Text>
    </Card>
  );
}

export default ProductCard;
