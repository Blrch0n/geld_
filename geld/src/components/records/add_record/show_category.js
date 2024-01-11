import { Context } from "@/app/layout";
import { useAuth } from "@/components/provider/AuthProvider";
import { useContext, useState } from "react";
import * as icons from "react-icons/gr";

export default function ShowCategoryOfAddRecord(props) {
  const { categoryData, isReadyCategory } = useAuth();
  const { setIsOpenCategory } = useContext(Context);

  return (
    <div className="w-full h-[392px] top-44 left-0 absolute flex flex-col overflow-scroll bg-white rounded-xl ">
      <span
        className="flex flex-row items-center w-full h-[56px] py-4 gap-3 px-[16px]"
        onClick={() => {
          setIsOpenCategory(true);
        }}
      >
        <img src="/PlusCircle.svg" className="w-6 h-6"></img>
        <p>Add Category</p>
      </span>
      <hr></hr>
      {isReadyCategory &&
        categoryData.map((category, index) => (
          <span
            className="flex flex-row items-center w-full py-4 h-[56px] gap-3 px-[16px]"
            key={index}
            onClick={() => {
              props.select(category.categoryName);
              props.open(false);
            }}
          >
            <p>{category.categoryName} </p>
          </span>
        ))}
    </div>
  );
}
