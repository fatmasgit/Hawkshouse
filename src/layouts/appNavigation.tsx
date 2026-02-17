import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";
import background from "./background.png";

function AppNavigation() {
  return (
    <>
      <Nav />

      {/* Body background only */}
      <main
        className="min-h-screen bg-no-repeat bg-cover bg-center w-full pb-20"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default AppNavigation;
