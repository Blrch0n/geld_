import { Context_ } from "@/app/records/page";
import { useContext } from "react";

export default function HeaderRecords() {
  const { sumNumber } = useContext(Context_);
  return (
    <footer className="flex flex-col gap-[24px] w-full h-fit">
      <div className="flex flex-row w-full justify-between items-center">
        <span>Last 30 Days</span>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled>Newest first</option>
          <option>Latest</option>
          <option>Recently</option>
        </select>
      </div>
      <div className="w-full h-[48px] bg-white rounded-[12px] flex justify-between  flex-row items-center px-[24px] bg-white-300">
        <span className="h-fit justify-between items-center gap-[8px] flex flex-row">
          <input type="checkbox"></input>
          <label>Select all</label>
        </span>
        <p>0</p>
      </div>
    </footer>
  );
}
