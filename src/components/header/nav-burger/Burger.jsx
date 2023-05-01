import React from "react";

function Burger(props) {
  /*   const [openModal, setOpenModal] = useState(false);
  const openModal = setOpenModal(true); */
  return (
    <>
      <div className="absolute top-3 left-3">
        <button
          className="rounded lg:hidden focus:outline-none hover:bg-red-900"
          onClick={props.handleOpen}
        >
          <div className="w-5 h-0.5 mb-1 bg-white"></div>
          <div className="w-5 h-0.5 mb-1 bg-white"></div>
          <div className="w-5 h-0.5 bg-white"></div>
        </button>
      </div>
    </>
  );
}

export default Burger;
