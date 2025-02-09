import React from "react";
import { useEffect, useState, useRef } from "react";

// #region Modal Dialog
function ModalDialog({
  contents = null,
  width = "400px",
  height = "auto",
  icon = "",
  title = "",
  cssClass = "",
  fnClose = null,
}) {
  // State
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="jdm-modal-background">
      <div className="jdm-modal-foreground">
        <div
          className="jdm-modal-container"
          Style={`width:${width};height:${height};`}
        >
          <div className="jdm-title-modal-titlebar">
            <p className="jdm-modal-title">
              <span class="material-symbols-outlined" style="font-size:18px">
                {icon}
              </span>
              {title}
            </p>
            <span
              className="material-symbols-outlined"
              style="float:right;cursor:pointer"
            >
              close
            </span>
          </div>
          <div className="jdm-modal-content"></div>
        </div>
      </div>
    </div>
  );
}
// #endregion Modal Dialog
