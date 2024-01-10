import { Context } from "@/app/layout";
import Image from "next/image";
import { useContext, useState } from "react";
import { useAuth } from "../provider/AuthProvider";

export default function AddCategory() {
  const { setIsOpenCategory } = useContext(Context);
  const [categoryName, setCatergoryName] = useState();
  const { addCategory } = useAuth();
  return (
    <section className="absolute w-full h-screen flex items-center justify-center bg-[#00000080]">
      <div className="w-[494px] p-[24px] h-[236px] flex flex-col bg-white rounded-lg">
        <footer className="w-full h-[68px] flex items-center justify-between">
          <h1 className="text-[20px] font-[600]">Add Record</h1>
          <Image
            src="/esc.svg"
            width={24}
            alt="Picture of the author"
            height={24}
            onClick={() => {
              setIsOpenCategory(false);
            }}
          ></Image>
        </footer>
        <main className="w-full h-full flex flex-row gap-[8px] items-center">
          <div className="h-[48px] bg-[#D1D5DB] w-[84px] rounded-lg flex items-center">
            <Image
              src="black_arrow_down.svg"
              width={24}
              height={24}
              alt="bla"
            ></Image>
          </div>
          <input
            type="text"
            placeholder="Name"
            className="bg-[#D1D5DB] h-[48px] w-full rounded-lg px-[16px] py-[12px]"
            onChange={(e) => {
              setCatergoryName(e.target.value);
            }}
          ></input>
        </main>
        <input
          type="submit"
          className="w-full bg-[#16A34A] text-white rounded-[20px] h-[80px]"
          onClick={() => {
            addCategory(categoryName);
            setIsOpenCategory(false);
          }}
        ></input>
      </div>
    </section>
  );
}
