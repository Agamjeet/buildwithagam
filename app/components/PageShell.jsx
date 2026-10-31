import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
