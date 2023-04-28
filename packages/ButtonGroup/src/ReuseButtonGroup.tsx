import React, { ReactElement, useState } from "react";

export interface ButtonGroupProps {
  // buttonList: React.ReactNode[];
  children: ReactElement[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  console.log("Button Count is>>", props);

  const [active, setActive] = useState(0);

  return (
    <div className="">
      {props.children.map((ele, index) => {
        console.log(index === active);
        return React.cloneElement(ele, { disabled: index !== active });
      })}
    </div>
  );
};

export default ButtonGroup;
