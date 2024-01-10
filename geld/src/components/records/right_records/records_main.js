import { useAuth } from "@/components/provider/AuthProvider";

export default function RecordsMain() {
  const { recordData, isReadyRecord } = useAuth();
  return (
    <main className="w-full h-fit flex flex-col gap-[12px]">
      {isReadyRecord &&
        recordData.map((record, index) => (
          <div
            key={index}
            className="w-full h-[48px] bg-white rounded-[12px] flex justify-between  flex-row items-center px-[24px] bg-white-300"
          >
            <span className="h-fit justify-between items-center gap-[8px] flex flex-row">
              <input type="checkbox"></input>
              <div className="flex flex-col h-full w-fit justify-between">
                <label>{record.selectedCategory}</label>
                <label>{record.time}</label>
              </div>
            </span>
            <p>{record.amount}</p>
          </div>
        ))}
    </main>
  );
}
