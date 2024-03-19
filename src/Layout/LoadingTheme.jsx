import React from "react";
import { Spin } from "antd";
import "../assets/css/LoadingTheme.scss";

const LoadingTheme = () => {
  return (
    <div className="Loading">
      <Spin size="Large" />
    </div>
  );
};

export default LoadingTheme;
