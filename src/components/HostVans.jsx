import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    const fetchVans = async () => {
      const res = await fetch("/api/host/vans");
      const data = await res.json();
      console.log(data.vans);

      setHostVans(data.vans);
    };

    fetchVans();
  }, []);

  const hostVanElements = hostVans.map((van) => {
    return (
      <>
        <Link
          style={{ color: "#161616", textDecoration: "none" }}
          to={`/host/vans/${van.id}`}
        >
          <div className="hostVanDiv" key={van.id}>
            <div>
              <img src={van.imageUrl}></img>
              <div className="vanPriceName">
                <p>{van.name}</p>
                <span>{`$${van.price}/day`}</span>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  });
  return (
    <>
      <h1 style={{ fontFamily: "Inter", marginLeft: "25px" }}>
        Your listed vans
      </h1>
      {hostVanElements}
    </>
  );
};

export default HostVans;
