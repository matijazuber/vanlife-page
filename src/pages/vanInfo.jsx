import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const VanInfo = () => {
  const params = useParams();
  const [van, setVan] = useState();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <>
      <Link to=".." relative="path" className="backButton">
        &larr; <span>Back to all vans</span>
      </Link>
      {van ? (
        <div key={van.id} className="van-tile-info">
          <img src={van.imageUrl}></img>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
            <i className="van-description">{van.description}</i>
            <br></br>
            <button className="link-button">Rent this van</button>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default VanInfo;
