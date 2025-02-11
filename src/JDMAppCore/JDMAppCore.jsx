import React, {
  useImperativeHandle,
  useState,
  useRef,
  forwardRef,
} from "react";
import ReactDOM from "react-dom";

// #region Modal Dialog
const ModalDialog = forwardRef(
  (
    {
      contents = null,
      width = "400px",
      height = "auto",
      icon = "",
      title = "",
      cssClass = "",
      fnClose = null,
      portalRoot = document.body,
    },
    ref
  ) => {
    // #region State
    const [isShown, setShow] = useState(false);
    const [modalTitle, setModalTitle] = useState(title);
    const [modalContents, setModalContents] = useState(contents);
    // #endregion

    // #region Refs
    const divFgd = useRef(null);
    const divBgd = useRef(null);
    const container = useRef(null);
    const titleBar = useRef(null);
    const titleContent = useRef(null);
    const content = useRef(null);
    // #endregion

    // #region Methods
    // Pass methods up for parent access
    useImperativeHandle(ref, () => ({
      toggleShow: () => toggleShow(),
      show: () => show(),
      hide: () => hide(),
      setTitle: (newTitle) => setModalTitle(newTitle),
      setContents: (newContents) => setModalContents(newContents),
      getRefs: () => ({
        divFgd: divFgd.current,
        divBgd: divBgd.current,
        container: container.current,
        titleBar: titleBar.current,
        titleContent: titleContent.current,
        content: content.current,
      }),
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
    };

    const hide = () => {
      // Injected close function
      if (fnClose) fnClose();
      setShow(false);
    };

    const setZIndex = () => {
      const existingDialogs = document.getElementsByClassName(
        "jdm-modal-foreground"
      );
      let highestZIndex = 1001;

      for (let dialog of existingDialogs) {
        let zIndex = parseInt(dialog.style.zIndex, 10);
        if (!isNaN(zIndex) && zIndex > highestZIndex) highestZIndex = zIndex;
      }

      if (divBgd.current && divFgd.current) {
        divBgd.current.style.zIndex = highestZIndex + 1;
        divFgd.current.style.zIndex = highestZIndex + 2;
      }
    };
    // #endregion

    // Modal Content to be added to Portal
    const modalContent = (
      <div ref={divBgd} class="jdm-modal-background">
        <div ref={divFgd} className="jdm-modal-foreground">
          <div
            ref={container}
            className={`jdm-modal-container ${cssClass}`}
            Style={`width:${width};height:${height};`}
          >
            <div ref={titleBar} className="jdm-title-modal-titlebar">
              <p className="jdm-modal-title">
                <span
                  className="material-symbols-outlined"
                  Style="font-size:18px"
                >
                  {icon}
                </span>
                <p ref={titleContent}>{modalTitle}</p>
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
              {modalContents}
            </div>
          </div>
        </div>
      </div>
    );

    // Component HTML
    return isShown ? ReactDOM.createPortal(modalContent, portalRoot) : null;
  }
);

export { ModalDialog };
// #endregion Modal Dialog
