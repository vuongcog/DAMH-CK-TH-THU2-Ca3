import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";
import { useStateContext } from "../../context/StateContextProvider";
function MainLayout({
  children,
  MenuItem,
  Search,
  Navigation,
  IconHeader,
  FooterPage,
}) {
  const { theme } = useStateContext();
  return (
    <Layout className="w-screen h-screen">
      <Header
        className={`${
          theme ? "dark" : "bg-white"
        } border-b-[1px]  border-solid border-[#424242FF] drop-shadow-3xl  px-0 flex justify-between items-center h-[80px]`}
      >
        {IconHeader ? <IconHeader></IconHeader> : null}
        {Search ? <Search></Search> : null}
        {Navigation ? <Navigation></Navigation> : null}
      </Header>
      <Layout>
        <Sider className="bg-white mt-[1px]">
          {MenuItem ? <MenuItem></MenuItem> : null}
        </Sider>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
