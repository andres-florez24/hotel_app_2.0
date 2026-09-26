import { Link } from "react-router-dom";

export default function Room({ data }) {
  return (
    <div className="w3-third w3-margin-bottom">
      <img src={data.image} alt={data.title} style={{ width: "100%", height: "300px" }} />
      <div className="w3-container w3-white">
        <h3>{data.title}</h3>
        <h6 className="w3-opacity">{data.price}</h6>
        <p>{data.description}</p>
        <Link 
          to={`/Rooms/${data.id}`} 
          className="w3-button w3-block w3-black w3-margin-bottom"
        >
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}