import React from "react";

function Burger(props) {
  /*   const [openModal, setOpenModal] = useState(false);
  const openModal = setOpenModal(true); */
  return (
    <>
      <div className="absolute top-[1.85rem] left-[1.5rem] md:top-7 md:left-8">
        <button
          className="rounded lg:hidden focus:outline-none hover:bg-red-900"
          onClick={props.handleOpen}
        >
          <div className="w-5 h-0.5 mb-1  md:w-8 md:mb-2 bg-white"></div>
          <div className="w-5 h-0.5 mb-1 md:w-8 md:mb-2 bg-white"></div>
          <div className="w-5 h-0.5 md:w-8 bg-white"></div>
        </button>
      </div>
    </>
  );
}

export default Burger;
