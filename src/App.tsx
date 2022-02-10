import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SettingsContextWrapper } from "./components/contexts/SettingsContext/SettingsContext";
import { StatsContextWrapper } from "./components/contexts/StatsContext/StatsContext";
import { ToastProvider } from "./components/contexts/ToastContext/ToastContext";
import ErrorBoundaryWrapper from "./components/core/ErrorBoundary/ErrorBoundary";
import Footer from "./components/core/Footer/Footer";
import Navbar from "./components/core/Navbar/Navbar";
import PageContainer from "./components/core/PageContainer/PageContainer";
import { useDetectHeadless } from "./components/hooks/useDetectHeadless/useDetectHeadless";
import Landing from "./components/pages/Landing/Landing";
import NotFound from "./components/pages/NotFound/NotFound";
import Widget from "./components/pages/Widget/Widget";
import Headless from "./components/Widget/Headless/Headless";

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <ErrorBoundaryWrapper>
          <SettingsContextWrapper>
            <StatsContextWrapper>
              <div className="flex flex-col justify-center items-center relative">
                <PageWrapper />
              </div>
            </StatsContextWrapper>
          </SettingsContextWrapper>
        </ErrorBoundaryWrapper>
      </ToastProvider>
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
      <Route path="/widget/headless" element={<Headless />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
