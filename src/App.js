import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Form } from "./Components/Form";
function App() {
  const Login = () => {
    return <p>login</p>;
  };

  const SignUp = () => {
    return <p>Sign Up</p>;
  };
  return (
    <>
      {/* <Form /> */}
      <Routes>
        <Route path="/" element={<Form />}>
          <Route  path="login" element={<Login />} />
          <Route path="sign" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
