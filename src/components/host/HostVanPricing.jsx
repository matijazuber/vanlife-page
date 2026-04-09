import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { van } = useOutletContext();
  return (
    <p>
      ${van.price}
      <span>/day</span>
    </p>
  );
};

export default HostVanPricing;
