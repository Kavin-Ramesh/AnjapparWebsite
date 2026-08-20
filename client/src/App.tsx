/** Parchment After Dark reminder: every route belongs to one restrained, editorial restaurant journey. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteShell } from "@/components/SiteChrome";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { AboutPage, CateringPage, ContactPage, DrinksPage, EventsPage, FoodMenuPage, PartiesPage, PrivacyPage, PromotionsPage, ReservationsPage, SpecialsPage } from "./pages/RestaurantPages";


function Router() {
  return (
    <SiteShell>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/Food-Menu"} component={FoodMenuPage} />
        <Route path={"/Menu"} component={FoodMenuPage} />
        <Route path={"/drink-menu"} component={DrinksPage} />
        <Route path={"/Catering"} component={CateringPage} />
        <Route path={"/catering"} component={CateringPage} />
        <Route path={"/party"} component={PartiesPage} />
        <Route path={"/events"} component={EventsPage} />
        <Route path={"/reservations"} component={ReservationsPage} />
        <Route path={"/Promotions"} component={PromotionsPage} />
        <Route path={"/happy-hours-specials"} component={SpecialsPage} />
        <Route path={"/about-us"} component={AboutPage} />
        <Route path={"/contactus"} component={ContactPage} />
        <Route path={"/PrivacyPolicy"} component={PrivacyPage} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </SiteShell>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
