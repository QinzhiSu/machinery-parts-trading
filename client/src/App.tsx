import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import WhatsAppButton from "./components/WhatsAppButton";
import WeChatButton from "./components/WeChatButton";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BrandPage from "./pages/BrandPage";
import ConstructionPage from "./pages/ConstructionPage";
import TrucksPage from "./pages/TrucksPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import SearchResults from "./pages/SearchResults";
import FavoritesPage from "./pages/FavoritesPage";
import { ComparisonProvider } from "./contexts/ComparisonContext";
import ComparisonPanel from "./components/ComparisonPanel";
import { ReviewProvider } from "./contexts/ReviewContext";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
          <Route path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/construction" component={ConstructionPage} />
      <Route path="/trucks" component={TrucksPage} />
      <Route path="/brand/:brandId" component={BrandPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/search" component={SearchResults} />
      <Route path="/favorites" component={FavoritesPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ComparisonProvider>
          <ReviewProvider>
            <ThemeProvider defaultTheme="light">
              <TooltipProvider>
                <Toaster />
                <Router />
                <WhatsAppButton />
                <WeChatButton />
                <ComparisonPanel />
              </TooltipProvider>
            </ThemeProvider>
          </ReviewProvider>
        </ComparisonProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
