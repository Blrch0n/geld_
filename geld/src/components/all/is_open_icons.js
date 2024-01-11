import { ColorData } from "./color_data";
import { iconData } from "./open_icons";
import SingleIcon from "./single_icon";
export default function IsIconsOpen() {
  return (
    <section className="w-[312px] h-[336px] rounded-2 px-6 bg-white absolute top-20 left-0">
      <header className="w-full m-auto h-[264px] py-6 bg-red-400 grid grid-rows-5 grid-cols-6">
        {iconData.map((data, index) => (
          <div
            className="w-[18px] h-[18px] flex items-center justify-center"
            key={index}
          >
            <SingleIcon icon_={data.icon}></SingleIcon>
          </div>
        ))}
      </header>
      <hr></hr>
      <footer className="w-full h-[72px] py-6 bg-blue-300">
        <div className="flex flex-row w-full h-full items-center justify-between">
          {ColorData.map((span, index) => (
            <span
              className="w-6 h-6 rounded-full"
              key={index}
              style={{ backgroundColor: `${span.color}` }}
            ></span>
          ))}
        </div>
      </footer>
    </section>
  );
}
