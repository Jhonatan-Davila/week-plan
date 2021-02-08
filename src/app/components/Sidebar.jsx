import React, {useState} from "react";
import "./Sidebar.scss";

const Sidebar = ({ width, height, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className="side-bar"
      style={{
        width,
        height,
        maxWidth: width,
        left: open ? 0 : width
      }}
    >
      <React.Fragment>{children}</React.Fragment>
      <button
        onClick={() => setOpen(!open)}
        className="toggle-menu"
        style={{
          transform: `translate(${width}px, 20vh)`
        }}
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default Sidebar;