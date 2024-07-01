import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PanelHeader = ({ title }: { title: string }) => {
  return (
    <div className=" flex justify-between items-center px-1">
      <h1 className=" text-4xl font-medium text-success-900">{title}</h1>
      <button className=" flex items-center gap-1.5 px-2.5 py-2 bg-success-700 text-white rounded-sm">
        <FontAwesomeIcon icon={faPlus} className=" w-4 h-4" />
        <span className=" text-sm font-medium">Add</span>
      </button>
    </div>
  );
};

export default PanelHeader;
