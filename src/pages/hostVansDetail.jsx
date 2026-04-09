import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MyVansDetail = () => {
  const params = useParams();
  const [van, setVan] = useState();

  useEffect(() => {
    const fetchVans = async () => {
      const res = await fetch(`/api/vans/${params.id}`);
      const data = await res.json();
      setVan(data.vans);
    };
    fetchVans();
  }, [params.id]);

  return (
    <>
      {van ? (
        <div className="divDetailsBack">
          <div className="vanDetailsDiv">
            <img src={van.imageUrl}></img>
            <div>
              <i className={`vanDetailsType ${van.type} selected`}>
                {van.type}
              </i>

              <h3>{van.name}</h3>
              <p>
                ${van.price}
                <span>/day</span>
              </p>
              <div className="optionsVanDetail">
                <span>Details</span>
                <span>Pricing</span>
                <span>Photos</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MyVansDetail;
