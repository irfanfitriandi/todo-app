import AZIcon from "components/Icons/AZIcon";
import LatestIcon from "components/Icons/LatestIcon";
import OldestIcon from "components/Icons/OldestIcon";
import SortIcon from "components/Icons/SortIcon";
import UnfinishedIcon from "components/Icons/UnfinishedIcon";
import ZAIcon from "components/Icons/ZAIcon";
import { useState } from "react";

const SortDropdown = () => {
  const [isClose, setIsClose] = useState(true);

  return (
    <div className="group inline-block relative">
      <SortIcon
        className="cursor-pointer"
        onClick={() => setIsClose(!isClose)}
      />
      <ul
        className={`absolute text-gray-700 rounded-lg border-2 shadow-lg ${
          isClose && "hidden"
        }`}
      >
        <li className="rounded-t-lg bg-white flex items-center gap-2 py-3 px-5 whitespace-nowrap">
          <LatestIcon />
          Terbaru
        </li>
        <li className="bg-white flex items-center gap-2 py-3 px-5 whitespace-nowrap">
          <OldestIcon />
          Terlama
        </li>
        <li className="bg-white flex items-center gap-2 py-3 px-5 whitespace-nowrap">
          <AZIcon />
          A-Z
        </li>
        <li className="bg-white flex items-center gap-2 py-3 px-5 whitespace-nowrap">
          <ZAIcon />
          Z-A
        </li>
        <li className="rounded-b-lg bg-white flex items-center gap-2 py-3 px-5 whitespace-nowrap">
          <UnfinishedIcon />
          Belum Selesai
        </li>
      </ul>
    </div>
  );
};

export default SortDropdown;
