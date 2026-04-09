import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const MyVansDetail = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
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
      <Link to=".." relative="path" className="backButton">
        &larr; <span>Back to all vans</span>
      </Link>
      {van ? (
        <div className="divDetailsBack">
          <div className="vanDetailsDiv">
            <div>
              <h1>Your Listed Vans</h1>
              <h3>Manage and view all your hosted vehicles.</h3>

              <div className="optionsVanDetail">
                <NavLink
                  end
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                  to="."
                >
                  <span>Details</span>
                </NavLink>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                  to={`/host/vans/${params.id}/pricing`}
                >
                  <span>Pricing</span>
                </NavLink>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyles : null)}
                  to={`/host/vans/${params.id}/photos`}
                >
                  <span>Photos</span>
                </NavLink>
              </div>
            </div>
            <Outlet context={{ van }}></Outlet>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MyVansDetail;
