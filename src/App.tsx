import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import HomePage from "./pages/HomePage";
import Topic1 from "./pages/Topic1";
import Topic2 from "./pages/Topic2";
import Topic3 from "./pages/Topic3";
import Topic4 from "./pages/Topic4";
import Topic5 from "./pages/Topic5";
import GamesPage from "./pages/GamesPage";
import AchievementsPage from "./pages/AchievementsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="lg:ml-72">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/topic1" element={<Topic1 />} />
              <Route path="/topic2" element={<Topic2 />} />
              <Route path="/topic3" element={<Topic3 />} />
              <Route path="/topic4" element={<Topic4 />} />
              <Route path="/topic5" element={<Topic5 />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
