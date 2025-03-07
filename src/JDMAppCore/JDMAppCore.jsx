import React, {
  useImperativeHandle,
  useState,
  useRef,
  forwardRef,
  useCallback,
  createContext,
  useContext,
} from "react";
import ReactDOM from "react-dom";

// #region Modal Dialog

// Modal Dialog Context
const ModalDialogContext = createContext(null);

// Modal Dialog Provider
const ModalDialogProvider = ({ children }) => {
  const [modalDialog, setModalDialog] = useState(null);

  const showModalDialog = (contents, width, height, icon, title, cssClass, fnClose, portalRoot) => {
    setModalDialog({ contents, width, height, icon, title, cssClass, fnClose, portalRoot });
  };

  const hideModalDialog = () => {
    setModalDialog(null);
  };

  return (
    <ModalDialogContext.Provider value={{ showModalDialog, hideModalDialog }}>
      {children}
      {modalDialog && 
      <ModalDialog 
      contents={modalDialog.contents}
      width={modalDialog.width}
      height={modalDialog.height}
      icon={modalDialog.icon}
      title={modalDialog.title}
      cssClass={modalDialog.cssClass}
      fnClose={modalDialog.fnClose}
      portalRoot={modalDialog.portalRoot}
      />}
    </ModalDialogContext.Provider>
  );
};

// Custom hook to use ModalDialog
export const useModalDialog = () => {
  const context = useContext(ModalDialogContext);
  if (!context) {
    throw new Error('useModalDialog must be used within a ModalDialogProvider');
  }
  return context;
};

// Modal Dialog Component
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
    // #endregion

    // #region Methods
    // Pass methods up for parent access
    useImperativeHandle(ref, () => ({
      toggleShow,
      show,
      hide,
      setTitle: (newTitle) => setModalTitle(newTitle),
      setContents: (newContents) => setModalContents(newContents),
    }));

    const toggleShow = useCallback(() => {
      if (isShown) {
        setZIndex();
        // Injected close function
        if (fnClose) fnClose();
        setShow(false);
      } else {
        setShow(true);
      }
    }, [fnClose, isShown]);

    const show = useCallback(() => {
      setZIndex();
      setShow(true);
    }, []);

    const hide = useCallback(() => {
      // Injected close function
      if (fnClose) fnClose();
      setShow(false);
    }, [fnClose]);

    const setZIndex = () => {
      // Grab all existing ModalDialogs and sort them.
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
      <div ref={divBgd} className="jdm-modal-background">
        <div ref={divFgd} className="jdm-modal-foreground">
          <div
            className={`jdm-modal-container ${cssClass}`}
            Style={`width:${width};height:${height};`}
            role="dialog"
            tabIndex={-1}
          >
            <div className="jdm-title-modal-titlebar">
              <div className="jdm-modal-title">
                <span
                  className="material-symbols-outlined"
                  Style="font-size:18px"
                >
                  {icon}
                </span>
                <p>{modalTitle}</p>
              </div>
              <span
                className="material-symbols-outlined"
                Style="float:right;cursor:pointer"
                onClick={() => hide()}
                role="button"
              >
                close
              </span>
            </div>
            <div className="jdm-modal-content">{modalContents}</div>
          </div>
        </div>
      </div>
    );

    // Component HTML
    return isShown ? ReactDOM.createPortal(modalContent, portalRoot) : null;
  }
);

// export { ModalDialog };
export { ModalDialogProvider };
// #endregion Modal Dialog

// #region Ask Questions (Relies on ModalDialog)

const AskQuestion = forwardRef(
  (
    {
      contents = null,
      icon = null,
      title = "",
      fnYes = null,
      fnNo = null,
      portalRoot = document.body,
    },
    ref
  ) => {
    // #region State & Refs
    const [questionTitle, setQuestionTitle] = useState(title);
    const [questionContents, setQuestionContents] = useState(contents);

    const modalRef = useRef(null);
    // #endregion

    // #region Methods
    // Pass methods up for parent access
    useImperativeHandle(ref, () => ({
      show: () => show(),
      hide: () => hide(),
      setTitle: (newTitle) => setQuestionTitle(newTitle),
      setContents: (newContents) => setQuestionContents(newContents),
    }));

    const show = () => {
      modalRef.current.show(true);
    };

    const hide = () => {
      modalRef.current.show(false);
    };
    // #endregion

    const content = (
      <div className="jdm-askquestion-container">
        <div className="jdm-askquestion-wrapper">
          {icon && (
            <span
              className="material-symbols-outlined"
              style={"font-size:36px;margin-right:8px;align-self:flex-start"}
            >
              {icon}
            </span>
          )}
          {questionContents}
          <div className="jdm-askquestion-buttons">
            <span
              className="jdm-askquestion-yes"
              onClick={() => {
                modalRef.current.hide();
                fnYes && fnYes();
              }}
            >
              <span class="material-symbols-outlined">done</span>
              Yes
            </span>
            <span
              className="jdm-askquestion-no"
              onClick={() => {
                modalRef.current.hide();
                fnNo && fnNo();
              }}
            >
              <span class="material-symbols-outlined">close</span>
              No
            </span>
          </div>
        </div>
      </div>
    );

    return (
      <ModalDialog
        ref={modalRef}
        contents={content}
        title={questionTitle}
        width={"auto"}
        portalRoot={portalRoot}
      />
    );
  }
);

export { AskQuestion };
// #endregion

// #region ShowMessage
const ShowMessage = forwardRef(
  (
    {
      contents = null,
      icon = null,
      title = "",
      fnYes = null,
      fnNo = null,
      portalRoot = document.body,
    },
    ref
  ) => {
    // #region State
    const [isShown, setShow] = useState(false);
    const [questionTitle, setQuestionTitle] = useState(title);
    const [questionContents, setQuestionContents] = useState(contents);
    // #endregion

    // #region Refs
    const divFgd = useRef(null);
    const divBgd = useRef(null);
    // #endregion

    // #region Methods
    // Pass methods up for parent access
    useImperativeHandle(ref, () => ({
      toggleShow,
      show,
      hide,
      setTitle: (newTitle) => setQuestionTitle(newTitle),
      setContents: (newContents) => setQuestionContents(newContents),
    }));

    const toggleShow = useCallback(() => {
      if (isShown) {
        // Injected no function
        if (fnNo) fnNo();
        setShow(false);
      } else {
        setZIndex();
        // Injected yes function
        if (fnYes) fnYes();
        setShow(true);
      }
    }, [fnYes, fnNo]);

    const show = useCallback(() => {
      setZIndex();
      // Injected yes function
      if (fnYes) fnYes();
      setShow(true);
    }, [fnYes]);

    const hide = useCallback(() => {
      // Injected no function
      if (fnNo) fnNo();
      setShow(false);
    }, [fnNo]);

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

    // Show Message to be added to Portal
    const content = (
      <div className="jdm-askquestion-container">
        <div className="jdm-askquestion-wrapper">
          {icon && (
            <span
              className="material-symbols-outlined"
              style={"font-size:36px;margin-right:8px;align-self:flex-start"}
            >
              {icon}
            </span>
          )}
          {questionContents}
          <div className="jdm-askquestion-buttons">
            <span
              className="jdm-askquestion-yes"
              onClick={() => {
                hide();
                fnYes && fnYes();
              }}
            >
              <span class="material-symbols-outlined">done</span>
              Yes
            </span>
            <span
              className="jdm-askquestion-no"
              onClick={() => {
                hide();
                fnNo && fnNo();
              }}
            >
              <span class="material-symbols-outlined">close</span>
              No
            </span>
          </div>
        </div>
      </div>
    );
    // Component HTML
    return isShown ? ReactDOM.createPortal(content, portalRoot) : null;
  }
);

export { ShowMessage };
// #endregion ShowMessage
