import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { van } = useOutletContext();

  return <img src={van.imageUrl} />;
};

export default HostVanPhotos;
