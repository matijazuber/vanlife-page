import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vansData, setVansData] = useState([]);
  const [search, setSearch] = useSearchParams();
  const typeFilter = search.get("type");
  console.log(typeFilter);

  const displayedVans = typeFilter
    ? vansData.filter((char) => char.type.toLowerCase() === typeFilter)
    : vansData;

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVansData(data.vans));
  }, []);

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        style={{ color: "#161616", textDecoration: "none" }}
        to={`/vans/${van.id}`}
      >
        <img src={van.imageUrl}></img>
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
      </Link>
    </div>
  ));

  return (
    <>
      <h1 className="explore">Explore our Van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => setSearch({ type: "simple" })}
          className="van-type-filter "
        >
          Simple
        </button>
        <button
          onClick={() => setSearch({ type: "rugged" })}
          className="van-type-filter "
        >
          Rugged
        </button>
        <button
          onClick={() => setSearch({ type: "luxury" })}
          className="van-type-filter "
        >
          Luxury
        </button>
        <button onClick={() => setSearch({})} className="van-type-filter">
          Clear Filter
        </button>
      </div>
      <div>{vanElements}</div>
    </>
  );
};

export default Vans;
