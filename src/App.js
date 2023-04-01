import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Form } from "./Components/Form";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignupForm from "./Components/SignupForm/SignupForm";
function App() {


  return (
    <>
      {/* <Form /> */}
      <Routes>
        <Route path="/" element={<Form />}>
          <Route  index path="login" element={<LoginForm />} />
          <Route path="sign" element={<SignupForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
