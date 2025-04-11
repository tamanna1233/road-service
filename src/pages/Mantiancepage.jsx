import React from "react";

const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
        <img
          src="https://i.pinimg.com/originals/23/bf/6c/23bf6c175985a931c3c2d893f21f3313.gif"
          alt="Maintenance"
          className="h-full  mx-auto mb-6 relative"
        />
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">We'll Be Back Soon!</h1>
        <p className="text-gray-600 mb-4">
          Our website is currently undergoing scheduled maintenance. We’ll be back shortly. Thank you for your patience!
        </p>
        <p className="text-sm text-black">&copy; {new Date().getFullYear()} The Walia Group of Company</p>
      </div>
    </div>
  );
};

export default MaintenancePage;
