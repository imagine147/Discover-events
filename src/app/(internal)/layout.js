import Footer from "@/layouts/footer";
import NavBar from "@/layouts/nav";

export default function InternalLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}