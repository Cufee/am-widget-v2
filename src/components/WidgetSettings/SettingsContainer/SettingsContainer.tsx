function SettingsContainer() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex text-white opacity-40 text-xl justify-center m-4 mb-2 uppercase">
        Settings
      </div>
      <div className="p-4 pt-0">
        <div>Show Branding</div>
        <div>Show Player Name</div>
        <div>Show Random Totals</div>
        <div>Show Rating Totals</div>
        <div>Show Career For Tanks</div>
        <div>Show Detailed For Tanks</div>
        <div>Show Accuracy in Rating</div>
        <div>Show Rating in Random</div>
      </div>
    </div>
  );
}

export default SettingsContainer;
