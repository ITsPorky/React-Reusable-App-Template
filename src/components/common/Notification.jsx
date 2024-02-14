import React, { Children, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Notification = ({
  children,
  className = "",
  title,
  text,
  timer = 5000,
}) => {
  const [isVisible, setVisible] = useState(false);

  const handleEnable = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, timer);
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
      <div className={`notification ${isVisible ? "open" : ""} ${className}`}>
        <div className="notification-header">
          <div>
            <b>{title}</b>
          </div>
          <div onClick={handleDisable}>
            <FontAwesomeIcon icon={faXmark} fontSize={20} />
          </div>
        </div>
        <div className="notification-body">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Notification;
