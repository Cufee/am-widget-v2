import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import WidgetSettings from "./components/WidgetSettings/WidgetSettings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex justify-center uppercase opacity-25 text-2xl absolute top-0 left-2 origin-center">
          beta
        </div>
        <Routes>
          <Route path="/" element={<WidgetSettings />} />
          <Route path="/widget" element={<WidgetSettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
