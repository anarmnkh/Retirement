import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[700px] flex flex-col">
        <button
          className="px-3 py-2 text-gray-600 text-md place-self-end border border-gray-500  bg-white"
          onClick={() => onClose()}
        >
          {" "}
          {/**<span> <MdCancelPresentation size={20}/></span>*/}
          Хаах
        </button>
        <div className="bg-white p-2 rounded-md mt-1 "> {children} </div>
      </div>
    </div>
  );
};
export default Modal;
