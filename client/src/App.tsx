import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import BrandPage from "./pages/BrandPage";
import ConstructionPage from "./pages/ConstructionPage";
import TrucksPage from "./pages/TrucksPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/construction" component={ConstructionPage} />
      <Route path="/trucks" component={TrucksPage} />
      <Route path="/brand/:brandId" component={BrandPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
            <WhatsAppButton />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
