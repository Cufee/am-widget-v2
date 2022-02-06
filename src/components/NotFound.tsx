import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="my-16 mx-4 flex justify-center items-center">
      <div className="bg-base-dark p-8 rounded-xl flex flex-col gap-4">
        <div>
          <h1>Snap!</h1>
          <p>This page does not exist.</p>
        </div>

        <div className="flex justify-center">
          <Link to={"/"}>
            <button className="bg-primary px-4 py-2 rounded-md">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
