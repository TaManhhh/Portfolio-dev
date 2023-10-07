import React from "react";
import "./style.css";
const Button = ({ children, className, style, ...props }: any) => {
  return (
    <div className="h-[70px]  flex items-center">
      <button  className={`button  ${className}`} style={style} {...props}>
        <div className="button-main">{children}</div>
      </button>
    </div>
  );
};

export default Button;
