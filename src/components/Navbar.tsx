import React from "react";

function Navbar() {
  return (
    <div className="bg-black h-24 relative text-white flex items-center px-24 m-0 w-full">
      <div className="flex-1 flex">
        <div>Logo Container</div>
        <div className="mx-4">|</div>
        <div>Help</div>
      </div>

      <div className="flex flex-row-reverse ">
        <button>Sign in</button>
        <button className="mx-4">Submit a Request</button>
      </div>
    </div>
  );
}

export default Navbar;
