import * as icons from "react-icons/gr";

export default function SingleIcon(props) {
  const Icon = icons[props.icon_];

  return <Icon size={18} />;
}
