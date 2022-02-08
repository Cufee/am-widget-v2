import LinkTo from "./core/LinkTo";

function Navbar() {
  return (
    <div className="bg-base-dark justify-between sm:justify-center flex flex-row gap-2 rounded-xl relative p-2">
      <div className="flex flex-col sm:flex-row sm:flex-grow gap-2 justify-start items-center">
        <LinkTo to="/">Home</LinkTo>
        <LinkTo to="/widget">Widget</LinkTo>
        <LinkTo to="https://aftermath.link/bot">Discord Bot</LinkTo>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 justify-start items-center">
        <div className="flex justify-center uppercase opacity-25 text-2xl font-bold">
          beta
        </div>
        <LinkTo to="/login">Login</LinkTo>
      </div>
    </div>
  );
}

export default Navbar;
