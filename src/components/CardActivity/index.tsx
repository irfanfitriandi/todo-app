import BinIcon from "components/Icons/BinIcon";
import { useNavigate } from "react-router-dom";

const CardActivity = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col justify-between bg-white py-5 px-7 rounded-xl shadow-md min-h-[232px] cursor-pointer"
      onClick={() => navigate("/detail/:id")}
    >
      <h1 className="font-bold text-lg">New Activity</h1>
      <div className="flex justify-between items-center text-accent">
        <p>23 Maret 2022</p>
        <BinIcon />
      </div>
    </div>
  );
};

export default CardActivity;
