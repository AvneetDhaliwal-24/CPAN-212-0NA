import { useState, useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/data`);
      // console.log(response);
      const data = await response.json();
      // console.log(data);
      setMessage(JSON.stringify(data));
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  const loginForm = async (e) => {
    e.preventDefault();

    const submission = { email, password };
    // console.log(submission);  

    try {
      const response = await fetch(`http://localhost:8000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission)
      });

      const data = await response.json();
      setMessage(JSON.stringify(data));
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={fetchData}>Click me for Data</button><br /><br />

      <form onSubmit={loginForm}>
        {/* <label for="email">E-mail:</label> */}
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> <br /><br />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;