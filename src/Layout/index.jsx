import { Outlet, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

const items = [
  {
    label: <NavLink to="/">HOME</NavLink>,
    key: "1",
  },
  {
    label: <NavLink to="/document">DOCUMENT</NavLink>,
    key: "2",
  },
];

const index = () => {
  return (
    <Layout>
      <Header>
        <Menu
          className="headerMenu"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Header>
      <Content>
        <div className="content">
          <Outlet />
        </div>
      </Content>
      <Footer>Multi-Select AutoComplete</Footer>
    </Layout>
  );
};

export default index;
