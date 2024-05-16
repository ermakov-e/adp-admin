/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import Pluse from "../../../assets/svg/Pluse.svg?react";
import "./index.scss";

interface CustomButtonProps {
  onClick: () => void;
  title: string;
  type: "default" | "withIcon" | "typeDelete";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  title,
  onClick,
}) => {
  return (
    <button
      className="button"
      onClick={onClick}
      style={{
        backgroundColor:
          type != "typeDelete"
            ? "rgba(0, 85, 255, 1)"
            : "rgba(230, 238, 255, 1)",
        color: type != "typeDelete" ? "#fff" : "rgba(0, 85, 255, 1)",
      }}
    >
      {type === "withIcon" && <Pluse />}
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;