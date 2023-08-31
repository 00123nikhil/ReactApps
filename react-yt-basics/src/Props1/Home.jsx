const Home = (props) => {
  return (
    <div>
      <h2 className="bg-red-500 text-white">Welcome to Home Section</h2>
      <p className="bg-red-500 text-white"> {props.msg} </p>
    </div>
  );
};

export default Home;
