import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer } = Layout;

const Test = () => {
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          background: "white",
        }}
      >
        <div
          style={{
            float: "left",
            minWidth: 120,
            height: 31,
            margin: "16px 24px 16px 0",
            background: "white",
          }}
        >
          <h2>Edmund Hang</h2>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          //   items={new Array(3).fill(null).map((_, index) => ({
          //     key: String(index + 1),
          //     label: `nav ${index + 1}`,
          //   }))}
          items={[
            { key: 1, label: "Home" },
            { key: 2, label: "About" },
            { key: 3, label: "Projects" },
            { key: 4, label: "Contact" },
          ]}
          onSelect={() => console.log("test")}
          style={{ float: "right" }}
        />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", color: "yellow" }}
      >
        <div style={{ padding: 24, minHeight: 380 }}>Content</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Test;
