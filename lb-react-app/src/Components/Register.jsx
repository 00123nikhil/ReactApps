function Register(Props) {
  console.log(Props.Register[0].Name);
  return (
    <card>
      <ProductsItems
        Name={Props.Register[0].Name}
        rollno={Props.Register[1].rollno}
      />
    </card>
  );
}
