import React, { useState } from 'react';

const ButtonGroup = (props) => {
    console.log("Button Count is>>", props);
    const [active, setActive] = useState(0);
    return (React.createElement("div", { className: "" }, props.children.map((ele, index) => {
        console.log(index === active);
        return React.cloneElement(ele, { disabled: index !== active });
    })));
};

export { ButtonGroup as ReuseButtonGroup };
