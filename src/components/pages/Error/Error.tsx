function Error() {
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="my-16 mx-4 flex justify-center items-center">
      <div className="bg-base-dark p-8 rounded-xl flex flex-col gap-4">
        <div>
          <h1>Snap!</h1>
          <p>Something was broken on this page.</p>
        </div>

        <div className="flex justify-center">
          <button onClick={reload} className="bg-primary px-4 py-2 rounded-md">
            Reload
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
