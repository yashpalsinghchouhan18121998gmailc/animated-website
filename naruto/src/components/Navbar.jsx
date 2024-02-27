import React from "react";

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 flex justify-between items-center text-white">
      <div className="logo">Naruto</div>
      <div className="links flex gap-10 ">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-md capitalize font-semibold ${
                index === 4 && "ml-32"
              }`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
