import Card from "./Components/Card";

function App() {
  const Register = [
    {
      Name: "Atul Jadhav",
      school: "SB school",
      rollno: 1,
      location: "Aurangabad",
    },
    {
      Name: "Nikhil Yadhav",
      school: "SB school",
      rollno: 13,
      location: "Aurangabad",
    },
    {
      Name: "Ram Raja",
      school: "SB school",
      rollno: 33,
      location: "Aurangabad",
    },
  ];

  return (
    <>
      <h1>React App</h1>
      <Card />
    </>
  );
}

export default App;
