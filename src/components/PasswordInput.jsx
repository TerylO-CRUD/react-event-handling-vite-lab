function PasswordInput() {
  function handleChange() {
    console.log("Entering password...");
  }

  return <input type="password" placeholder="Password" onChange={handleChange} />;
}

export default PasswordInput;