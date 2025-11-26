import { Routes, Route, Outlet } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Destinations from "./components/Destinations";
import Destination from "./components/Destination";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="destinations" element={<Outlet />}>
          <Route index element={<Destinations />} />
          <Route path=":slug" element={<Destination />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
