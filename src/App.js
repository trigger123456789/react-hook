import { useState } from "react";
import Form from "./components/forms/Form";
import ThankYouMessage from "./components/ThankYouMessage";

function App() {
  const [signupFinished, setSignupFinished] = useState(false);

  return signupFinished ? (
    <ThankYouMessage />
  ) : (
    <Form setSignupFinished={setSignupFinished} />
  );
}

export default App;
