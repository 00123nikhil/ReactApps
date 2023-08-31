const Header = (props) => {
  return (
    <div className="bg-indigo-600">
      <h1 className="font-bold text-3xl">react Apps | Props</h1>
      <h2 className="font-semibold text-2xl text-white"> {props.title} </h2>
    </div>
  );
};

export default Header;
