import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Bridget's Healthy Kitchen</h1>
      </div>
      <div className="bg-black rounded-lg p-2 flex flex-col items-center">
        <div className="text-xl font-bold">28 DAY</div>
        <div className="text-xl font-bold text-pink-500">BOOST</div>
        <div className="text-xl font-bold">CAMP</div>
        <Heart className="text-pink-500 h-5 w-5 mt-1" fill="currentColor" />
      </div>
    </header>
  );
};

export default Header;
