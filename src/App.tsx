// Libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Hooks
import { useDetectHeadless } from "./components/hooks/useDetectHeadless/useDetectHeadless";
// Contexts
import { SettingsContextWrapper } from "./components/contexts/SettingsContext/SettingsContext";
// Components
import Footer from "./components/core/Footer/Footer";
import Navbar from "./components/core/Navbar/Navbar";
import Widget from "./components/pages/Widget/Widget";
import Landing from "./components/pages/Landing/Landing";
import NotFound from "./components/pages/NotFound/NotFound";
import PageContainer from "./components/core/PageContainer/PageContainer";

function App() {
  return (
    <BrowserRouter>
      <SettingsContextWrapper>
        <div className="flex flex-col justify-center items-center relative">
          <PageWrapper />
        </div>
      </SettingsContextWrapper>
    </BrowserRouter>
  );
}

function PageWrapper() {
  const headless = useDetectHeadless();
  if (headless) return <PageContent />;
  return (
    <PageContainer>
      <Navbar />
      <PageContent />
      <Footer />
    </PageContainer>
  );
}

function PageContent() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/widget" element={<Widget />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
