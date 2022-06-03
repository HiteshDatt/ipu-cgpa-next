import dynamic from "next/dynamic";
import type { ReactElement } from "react";
import Header from "../Header";
const Footer = dynamic(() => import("../Footer"));

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
