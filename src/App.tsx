import { useState } from "react";
import { Button } from "./components/button";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button color="primary" />
      <Button color="secondary" />
      <Button color="success" />
      <Button color="danger" />
      <Button />
    </>
  );
}
