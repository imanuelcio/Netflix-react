const Navbar = () => {
  return (
    <div className="flex justify-between p-4 items-center absolute z-[100] w-full">
      <h1 className="text-red-600 cursor-pointer text-5xl font-bold">
        NETFLIX
      </h1>
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="text-white bg-red-600 px-4 py-2 rounded cursor-pointer hover:bg-white hover:text-red-600 transition-all">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
