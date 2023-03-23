import Button from "components/Button";
import Layout from "components/Layout";

import ActivityEmpty from "assets/activity-empty-state.svg";
import CardActivity from "components/CardActivity";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex justify-between py-10">
        <h1 className="text-4xl font-bold">Activity</h1>
        <Button color="bg-primary" label="+ Tambah" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(8).keys()].map((idx) => (
          <CardActivity key={idx} />
        ))}
      </div>
      <img className="mx-auto" src={ActivityEmpty} alt="todo-empty-state" />
    </Layout>
  );
};

export default Dashboard;
