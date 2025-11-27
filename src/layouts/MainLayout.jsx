import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { loader } from "../data/travel";

const MainLayout = () => {
  const [destinations, setDestinations] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loader();
      setDestinations(data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-slate-50 flex flex-col min-h-screen font-sans">
      <header className="bg-indigo-300 p-4">
        <Navbar />
      </header>

      <main className="container grow mx-auto">
        <Outlet context={destinations} />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
