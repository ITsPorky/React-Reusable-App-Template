import React, { Children, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Toast = ({ children, className = "", title, text, duration = 5000 }) => {
  const [isVisible, setVisible] = useState(false);

  const handleEnable = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, duration);
  };

  const handleDisable = () => {
    setVisible(false);
  };

  return (
    <>
      {Children.map(children, (child) => {
        const newElement = React.cloneElement(child, {
          onClick: handleEnable,
        });
        return <>{newElement}</>;
      })}
      <div className={`toast ${isVisible ? "open" : ""} ${className}`}>
        <div className="toast-header">
          <div>
            <b>{title}</b>
          </div>
          <div onClick={handleDisable}>
            <FontAwesomeIcon icon={faXmark} fontSize={20} />
          </div>
        </div>
        <div className="toast-body">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Toast;
