import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <div className="layout">
        <Header />
        <main className="layout-content">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
