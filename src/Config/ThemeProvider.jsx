import { ConfigProvider } from "antd";

const ThemeProvider = ({ children }) => {
  const themes = {
    components: {
      Button: {
        colorPrimary: "#00b96b",
      },
    },
  };
  return <ConfigProvider theme={themes}>{children}</ConfigProvider>;
};

export default ThemeProvider;
