import type { ReactElement } from "react";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
