import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="mb-3 text-center w-100">
        <h1 className="text-danger">---------Stop Ragging---------</h1>
        <h2>It's Crime</h2>
        <hr />
      </div>

      <div className="link-container mt-1">
        <button className="button">
          <Link className="link" to="/victim">
            Continue As a Victim
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
