import { Outlet } from "react-router";
import { Navbar, Footer } from "../components";

const MainLayout = () => {
  return (
    <div className="bg-slate-50 flex flex-col min-h-screen font-sans">
      <header className="bg-slate-400 p-4">
        <Navbar />
      </header>

      <main className="container grow mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
