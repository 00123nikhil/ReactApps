import Dashboard from "./Dashboard";

const Login = ({ name }) => {
  return (
    <>
      <div className="bg-green-600 text-white m-2 p-2">
        <h1>Login Component</h1>
        <h2>Name :{name} </h2>
        <Dashboard name={name} />
      </div>
    </>
  );
};

export default Login;
