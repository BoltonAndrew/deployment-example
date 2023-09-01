import { useState } from "react";

function AndyPage() {
  const [name, setName] = useState("Andy");

  return (
    <>
      <h2>{name}'s Page</h2>
    </>
  );
}

export default AndyPage;
