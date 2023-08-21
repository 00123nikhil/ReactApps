function Props(Props) {
  return (
    <>
      <h3>| Props Component |</h3>
      <p>Title: {Props.title}</p>
      <p>Title: {Props.day}</p>
      <ChildProps name={Props.title} />
    </>

    /* // define props types as below | You need to import Proptypes lib into project
    Props.propTypes={
      title:propTypes.string,
      day:propTypes.string
    }
    // You can define default props 
    Props.propTypes={
      title:'Title here',
      day:'day here'
    } */
  );
}
export default Props;
