export default function Types() {
  return (
    <div className="flex flex-col gap-[16px] w-full h-fit">
      <footer className="text-[16px] font-[600] text-black">Types</footer>
      <main className="flex flex-col gap-[4px] w-full h-fit">
        <div className="flex flex-row gap-[8px]">
          <input type="radio" name="type" className="w-[16px]"></input>
          <label>All</label>
        </div>
        <div className="flex flex-row gap-[8px]">
          <input type="radio" name="type" className="w-[16px]"></input>
          <label>Income</label>
        </div>
        <div className="flex flex-row gap-[8px]">
          <input type="radio" name="type" className="w-[16px]"></input>
          <label>Expense</label>
        </div>
      </main>
    </div>
  );
}
