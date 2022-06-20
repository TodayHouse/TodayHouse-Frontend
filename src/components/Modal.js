import React from "react";
import ModalComponent from "react-modal";

const Modal = (props) => {
    const { children, width, modalOpen, closeModal } = props;

    return (
        <ModalComponent
            isOpen={modalOpen}
            onRequestClose={closeModal}
            style={{
                overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                },
                content: {
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    left: `calc(50% - ${width / 2}px)`,
                    width: width + "px",
                    height: "fit-content",
                    maxHeight: "750px",
                    borderRadius: 8,
                    border: "3px solid skyblue",
                    backgroundColor: "white",
                    padding: 0,
                    overflow: "auto",
                },
            }}>
            {children}
        </ModalComponent>
    );
};

export default Modal;
