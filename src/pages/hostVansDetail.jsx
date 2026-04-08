import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MyVansDetail = () => {
  const params = useParams();
  const [van, setVan] = useState();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <>
      {van ? (
        <div>
          <div>
            <img src={van.imageUrl}></img>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MyVansDetail;
