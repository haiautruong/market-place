import { theme as antTheme } from "antd";

const theme = {
  algorithm: antTheme.darkAlgorithm,
  token: {
    colorPrimary: "#DA458F",
    colorInfo: "#DA458F",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorTextBase: "#FFFFFF",
    colorBgBase: "#15171D",
    fontFamily: "'Inter', sans-serif",
    borderRadius: 4,
    wireframe: false,
  },
  components: {
    Button: {
      colorPrimary: "#DA458F",
      algorithm: true,
      borderRadius: 4,
      controlHeight: 40,
      primaryShadow: "none",
    },
    Card: {
      colorBgContainer: "#1A1C24",
      borderRadiusLG: 8,
    },
    Layout: {
      headerBg: "#15171D",
      bodyBg: "#15171D",
      colorBgContainer: "#15171D",
    },
    Input: {
      colorBgContainer: "#1A1C24",
      activeBorderColor: "#DA458F",
    },
    Select: {
      colorBgContainer: "#1A1C24",
      optionSelectedBg: "rgba(218, 69, 143, 0.1)",
    },
  },
};

export default theme;
