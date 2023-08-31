import About from "./About";
import Header from "./Header";
import Home from "./Home";

const PropsApp = () => {
  const tmember = ["Nikhil", "Suraj", "Kamraj"];
  return (
    <div className="">
      <Header title="great world" />
      <Home msg="Hey nikhil nice to meet you.." />
      <About teamMembers={tmember} />
    </div>
  );
};

export default PropsApp;
