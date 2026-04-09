import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { van } = useOutletContext();
  return (
    <p>
      <strong> ${van.price}</strong>
      <span>/day</span>
    </p>
  );
};

export default HostVanPricing;
