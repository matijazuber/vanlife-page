import React from "react";

const Vans = () => {
  const [vansData, setVansData] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
  }, []);

  const vanElements = vansData.map((van) => (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl}></img>
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </div>
  ));

  return (
    <>
      <h1 className="explore">Explore our Van options</h1>
      <div>{vanElements}</div>
    </>
  );
};

export default Vans;
