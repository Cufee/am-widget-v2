import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import WidgetSettings from "./components/WidgetSettings/WidgetSettings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WidgetSettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
