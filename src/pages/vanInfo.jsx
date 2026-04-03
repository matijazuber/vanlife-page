import React from "react";
import { useParams } from "react-router-dom";

const VanInfo = () => {
  const params = useParams();
  const [van, setVan] = React.useState();

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <>
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
