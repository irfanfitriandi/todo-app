import { Link } from "react-router-dom";

import Layout from "components/Layout";
import Button from "components/Button";
import BackIcon from "components/Icons/BackIcon";
import EditIcon from "components/Icons/EditIcon";
import TodoEmpty from "assets/todo-empty-state.svg";
import SortDropdown from "./SortDropdown";
import CardTodo from "components/CardTodo";
import AddItemModal from "./AddItemModal";

const Detail = () => {
  return (
    <Layout>
      <div className="flex justify-between py-8">
        <div className="flex items-center gap-8">
          <Link to={`/`}>
            <BackIcon />
          </Link>
          <h1 className="text-4xl font-bold">New Activity</h1>
          <EditIcon />
        </div>
        <div className="flex items-center gap-8">
          <SortDropdown />
          <Button color="bg-primary" label="+ Tambah" />
          <AddItemModal />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {[...Array(8).keys()].map((idx) => (
          <CardTodo key={idx} />
        ))}
      </div>
      <img className="mx-auto" src={TodoEmpty} alt="todo-empty" />
      {/* Modals */}
    </Layout>
  );
};

export default Detail;
