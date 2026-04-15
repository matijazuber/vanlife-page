import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vansData, setVansData] = useState([]);
  const [search, setSearch] = useSearchParams();
  const typeFilter = search.get("type");

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
        state={{ searchParams: search.toString(), type: typeFilter }}
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
          className={
            typeFilter === "simple"
              ? `van-type-filter selected`
              : `van-type-filter`
          }
        >
          Simple
        </button>
        <button
          onClick={() => setSearch({ type: "rugged" })}
          className={
            typeFilter === "rugged"
              ? `van-type-filter selected`
              : `van-type-filter`
          }
        >
          Rugged
        </button>
        <button
          onClick={() => setSearch({ type: "luxury" })}
          className={
            typeFilter === "luxury"
              ? `van-type-filter selected`
              : `van-type-filter`
          }
        >
          Luxury
        </button>
        {typeFilter ? (
          <button onClick={() => setSearch({})} className="van-type-filter">
            Clear Filter
          </button>
        ) : null}
      </div>
      <div>{vanElements}</div>
    </>
  );
};

export default Vans;
