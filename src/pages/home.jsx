import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <main>
        <p>You got the travel plans,we got the travel vans</p>
        <p className="desc">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans" className="button">
          Find your van
        </Link>
      </main>
    </>
  );
}
