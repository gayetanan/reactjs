function AccessJSData() {
  // use {} to switch to JS in JSX
  const user = "Gayetan.an";
  const ageCal = (dof) => {
    const currentYear = new Date().getFullYear();
    return currentYear - dof;
  };
  const mamapinaAge = ageCal(2016);
  let saySome;

  if (mamapinaAge >= 18) {
    saySome = "you're a big girl Mama";
  } else {
    saySome = "Oupss ! you're teen";
  }
  return (
    <>
      <h1>hello {user}!</h1>
      <h4>You're {ageCal(1999)} years old</h4>

      <p>Message to Mamapina: {saySome}</p>
    </>
  );
}

export default AccessJSData;
