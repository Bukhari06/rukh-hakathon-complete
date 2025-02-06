


import { TruckIcon } from "@heroicons/react/24/outline";

const Banners = () => {
  return (
    <div className="bg-[#2A254B] text-white text-sm flex items-center justify-center p-2">
      <TruckIcon className="h-5 w-5 text-yellow-500 mr-2" />
      <p>Free delivery on all orders over £250 with code easter chekkout</p>
    </div>
  );
};

export default Banners;