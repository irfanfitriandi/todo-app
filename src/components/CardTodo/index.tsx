import BinIcon from "components/Icons/BinIcon";
import EditIcon from "components/Icons/EditIcon";

const CardTodo = () => {
  return (
    <div className="flex justify-between bg-white py-5 px-7 rounded-xl shadow-md">
      <div className="flex items-center gap-4">
        <input className="w-5 h-5 accent-primary" type="checkbox" />
        <div className="w-4 h-4 bg-red-600 rounded-full"></div>
        <h1 className="text-lg font-medium">hello word!</h1>
        <EditIcon className="w-5" />
      </div>
      <BinIcon />
    </div>
  );
};

export default CardTodo;
