// Components
import Spinner from "../../../core/Icons/Spinner/Spinner";

function Loading() {
  return (
    <div className="flex flex-col px-4 py-2 bg-gray-800 bg-opacity-90 rounded-xl overflow-hidden">
      <div className="text-center font-bold text-blue-400">Loading</div>
      <div className="flex justify-center mt-1">
        <Spinner />
      </div>
    </div>
  );
}

export default Loading;
