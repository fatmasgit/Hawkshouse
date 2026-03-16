import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";

function AppNavigation() {
  return (
    <>
      <Nav />

      {/* Body background only */}
      <main
        className="min-h-screen bg-no-repeat bg-cover bg-center w-full pb-20"
        style={{ backgroundImage: `url(/images/background.png)` }}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default AppNavigation;