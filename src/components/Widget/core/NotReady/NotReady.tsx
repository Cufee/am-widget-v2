interface NotReadyProps {
  title: string;
  message?: string;
}

function NotReady({ title, message }: NotReadyProps) {
  return (
    <div className="flex flex-col p-4 bg-gray-800 bg-opacity-90 rounded-xl overflow-hidden">
      <div className="text-center font-bold text-red-400">{title}</div>
      {message && <div className="break-words text-center">{message}</div>}
    </div>
  );
}

export default NotReady;
