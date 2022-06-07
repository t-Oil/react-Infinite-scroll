import Header from "./Header";
import Footer from "./Footer";

const Layout = (props: { children: any }) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
