import React, { useImperativeHandle, useEffect, useState, useRef, forwardRef  } from "react";

// #region Modal Dialog
const ModalDialog = forwardRef(({
  contents = null,
  width = "400px",
  height = "auto",
  icon = "",
  title = "",
  cssClass = "",
  fnClose = null,
}, ref) => {
  // State
  const [isShown, setShow] = useState(false);

  // Ref
  const divFgd = useRef(null);
  const divBgd = useRef(null);
  const container = useRef(null);
  const titleBar = useRef(null);
  const titleContent = useRef(null);
  const content = useRef(null);

  // Methods
  useImperativeHandle(ref, () =>({
    toggleShow () {
      if (isShown) {
        setZIndex();
        setShow(false);
      } else {
        setShow(true);
      }
    }
  }));

  const toggleShow = () => {
    if (isShown) {
      setZIndex();
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const show = () => {
    setZIndex();
    setShow(true);
  }

  const hide = () => {
    setShow(false);
  }

  const setZIndex = () => {
    const existingDialogs = document.getElementsByClassName('jdm-modal-foreground');
    let highestZIndex = 1001;
    
    for (let dialog of existingDialogs) {
      let zIndex = parseInt(dialog.style.zIndex, 10);
      if (!isNaN(zIndex) && zIndex > highestZIndex) highestZIndex = zIndex;
    }
    
    if (divBgd.current && divFgd.current) {
      divBgd.current.style.zIndex = highestZIndex + 1;
      divFgd.current.style.zIndex = highestZIndex + 2;
      document.body.appendChild(divBgd.current);
      document.body.appendChild(divFgd.current);
    }
  }

  // Component HTML
  return (
    <div ref={divBgd} class="jdm-modal-background">
      <div ref={divFgd} className="jdm-modal-foreground">
        <div
          ref={container}
          className={`jdm-modal-container ${cssClass}`}
          Style={`width:${width};height:${height};`}
        >
          <div ref={titleBar} className="jdm-title-modal-titlebar">
            <p ref={titleContent} className="jdm-modal-title">
              <span className="material-symbols-outlined" Style="font-size:18px">
                {icon}
              </span>
              {title}
            </p>
            <span
              className="material-symbols-outlined"
              Style="float:right;cursor:pointer"
              onClick={() => hide()}
            >
              close
            </span>
          </div>
          <div ref={content} className="jdm-modal-content">
            {contents}
          </div>
        </div>
      </div>
    </div>
  );
});

export { ModalDialog };
// #endregion Modal Dialog
