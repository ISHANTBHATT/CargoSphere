// import React from "react";

// const ShapedCard = () => {
//   return (
//     <div className="relative bg-red-500 h-[300px] w-80 text-white p-6 rounded-lg">
//       {/* Top-right corner cut effect */}
//       <div className="absolute  top-0 right-0 w-0 border-t-[80px] border-l-[80px] border-[#EDEBEF] border-solid"></div>

//       {/* Content */}
//       <h2 className="text-xl font-bold">About</h2>
//       <span className="text-sm absolute left-2 top-10 opacity-50">.01</span>
//       <p className="mt-4 text-sm font-semibold">
//         CBDC is a digital form of fiat currency issued and regulated by central
//         banks.
//       </p>
//     </div>
//   );
// };

// export default ShapedCard;
import React from "react";

const CutCornerCard = () => {
  return (
    <div className="relative bg-white border-r-2 border-black border-t-2 w-64 h-72 p-6 rounded-tr-[100px]">
      {/* Top-right cut effect */}
      {/* <div className="absolute top-0 right-0 w-20 h-20 bg-white border-b-2 border-black rotate-45 translate-x-6 -translate-y-6 z-0"></div> */}

      {/* Content */}
      <h2 className="text-lg font-bold">Title</h2>
      <p className="mt-2 text-sm">This is a card with a cut corner.</p>
    </div>
  );
};

export default CutCornerCard;
