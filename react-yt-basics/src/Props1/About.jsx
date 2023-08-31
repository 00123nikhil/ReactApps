const About = (props) => {
  return (
    <div>
      <h2>About our Team</h2>
      <ul>
        {props.teamMembers.map((member, index) => {
          <li key={index}> {member} </li>;
        })}
      </ul>
    </div>
  );
};

export default About;
