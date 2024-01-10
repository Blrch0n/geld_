export default function Card1() {
  return (
    <span className="w-[384px] h-[216px] p-[32px] flex flex-col rounded-[18px] justify-between bg-white">
      <img src="/logo_geld.png " className="w-[80px] h-[30px]"></img>
      <div className="w-full h-fit flex flex-row justify-between items-center">
        <div className="w-full h-fit flex flex-col">
          <p>Cash</p>
          <p>10,000,00</p>
        </div>
        <img src="/union.svg" className="w-[12px] h-20px"></img>
      </div>
    </span>
  );
}
