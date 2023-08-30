import Profile from "./Profile";

const Dashboard = ({ name }) => {
  return (
    <>
      <div className="bg-indigo-600 text-white p-2 m-2">
        <h1>Dashboard Component</h1>
        <h2>Name :{name} </h2>
        <Profile name={name} />
      </div>
    </>
  );
};

export default Dashboard;
