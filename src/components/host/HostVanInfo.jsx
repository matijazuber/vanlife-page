import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { van } = useOutletContext();

  return (
    <>
      <p>
        <strong>Name:</strong>
        {van.name}
      </p>
      <p>
        <strong>Category:</strong>
        {van.type}
      </p>
      <p>
        <strong>Description:</strong>
        {van.description}
      </p>
      <p>
        <strong>Visibility:</strong>Public
      </p>
    </>
  );
};

export default HostVanInfo;
