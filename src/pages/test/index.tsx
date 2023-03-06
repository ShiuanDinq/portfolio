import React from "react";
import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import { LinkedinOutlined, GithubOutlined } from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: "90vh",
  color: "#fff",
  // backgroundColor: "#108ee9",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const footerStyle = {
  textAlign: "center",
  minHeight: "5vh",

  // color: "#fff",
  // backgroundColor: "#108ee9",
};

const headerStyle = {
  textAlign: "center",
  minHeight: "5vh",
  position: "sticky",
  top: 0,
  zIndex: 1,
  width: "100%",
  background: "white",
};

const siderStyle = {
  // textAlign: "center",
  // lineHeight: "120px",
  // color: "#fff",
  // backgroundColor: "#3ba0e9",
};

const centerTextStyle = {
  fontSize: 70,
  color: "black",
  fontFamily: "Verdana",
  fontWeight: "bolder",
};

const Test = () => {
  return (
    // <Layout>
    //   <Header style={headerStyle}>
    //     <div
    //       style={{
    //         float: "left",
    //         minWidth: 120,
    //         height: 31,
    //         margin: "16px 24px 16px 0",
    //         background: "white",
    //       }}
    //     >
    //       <h2 style={{ color: "blue" }}>Edmund Hang</h2>
    //     </div>
    //     <Menu
    //       theme="light"
    //       mode="horizontal"
    //       defaultSelectedKeys={["2"]}
    //       items={[
    //         { key: 1, label: "Home" },
    //         { key: 2, label: "About" },
    //         { key: 3, label: "Projects" },
    //         { key: 4, label: "Contact" },
    //       ]}
    //       onSelect={() => console.log("test")}
    //       style={{ float: "right" }}
    //     />
    //   </Header>
    //   <Layout>
    //     <Sider style={siderStyle}>
    //       <Layout>
    //         <LinkedinOutlined />
    //         <GithubOutlined />
    //       </Layout>
    //     </Sider>
    //     <Content className="site-layout">
    //       {/* <Layout style={{ padding: 24, maxHeight: 380 }}> */}
    //       <div>
    //         <div className="wave"></div>
    //         <div className="wave"></div>
    //         <div className="wave"></div>
    //         <h2 style={centerTextStyle}>HEY, I'M EDMUND HANG</h2>
    //         <h2>
    //           A Frontend focused Web Developer building the Frontend of Websites
    //           and Web Applications that leads to the success of the overall
    //           product
    //         </h2>
    //         <button className="button">Projects</button>
    //         <svg
    //           width="120"
    //           height="101"
    //           viewBox="0 0 120 101"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <rect width="120" height="101" />
    //           <g id="triangles" clip-path="url(#clip0_0_1)">
    //             <rect width="120" height="101" />
    //             <g id="lightGroup">
    //               <path
    //                 id="light1"
    //                 opacity="0.7"
    //                 d="M36.1847 45.4039L6.77451 60.6879L7.09813 29.5126L36.1847 45.4039Z"
    //               />
    //             </g>
    //             <g id="darkGroup">
    //               <path
    //                 id="dark2"
    //                 opacity="0.7"
    //                 d="M46.1847 45.7024L16.7745 60.9864L17.0981 29.8112L46.1847 45.7024Z"
    //               />
    //               <path
    //                 id="dark1"
    //                 opacity="0.7"
    //                 d="M36.1847 45.4039L6.77452 60.6879L7.09813 29.5126L36.1847 45.4039Z"
    //               />
    //             </g>
    //           </g>
    //           <defs>
    //             <clipPath id="clip0_0_1">
    //               <rect width="120" height="101" />
    //             </clipPath>
    //           </defs>
    //         </svg>
    //       </div>

    //       {/* </Layout> */}
    //     </Content>
    //   </Layout>
    //   <Footer style={footerStyle}>Ant Design ©2023 Created by Ant UED</Footer>
    // </Layout>
    <body>
      {/* <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div> */}
      <div className="stripe">
        <div className="stripe_inner">WARNING</div>
      </div>
    </body>
  );
};

export default Test;
