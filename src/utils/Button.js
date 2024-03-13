const Button = ({size, name, toCall})=>{
    return (
      <div>
        {/* <h1>6EBF8B</h1> */}
        <div className="border-2 border-[#FFC700] hover:border-[#FFC700] text-black text-base rounded-xl hover:bg-[#FFC700] hover:text-black duration-150 ease-in-out hover:scale-110 hover:text-lg">
          <button className={`name-${size} p-2`} onClick={toCall}>
            {name}
          </button>
        </div>
      </div>
    );
};

export default Button;