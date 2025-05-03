import PublicHeader from "./header/PublicHeader";
import PrivateHeader from "./header/PrivateHeader";
import Footer from "./footer/Footer";
import "./Layout.css";
import useAuth from "../pages/auth/use-auth";

const Layout = ({ children }) => {
  const { userLooged } = useAuth();

  return (
    <div className="app-container">
      <div className="layout">
        {userLooged ? <PrivateHeader /> : <PublicHeader />}
        <main className="layout-content">{children}</main>
        <Footer />  {/* 👈 SIEMPRE RENDERIZADO */}
      </div>
    </div>
  );
};

export default Layout;
