
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-ben10-background">
      <Navbar />
      <div className="min-h-[calc(100vh-76px)] flex items-center justify-center">
        <div className="text-center glass-blur p-12">
          <h1 className="text-6xl font-['Bangers'] mb-4 text-ben10">404</h1>
          <p className="text-xl text-white mb-4">Oops! Page not found</p>
          <a 
            href="/" 
            className="text-ben10 hover:text-ben10-light underline transition-colors font-bold"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
