import "./Index.css";
import "./components/Employee";
import Employee from "./components/Employee";
import ErrMsg from "./components/ErrorMsg";
import { useState } from "react";

function App() {
  const [role, setRole] = useState();
  const showEmployee = true;
  return (
    <div className="App bg-orange-300 px-10 pt-5 pb-8">
      {showEmployee ? (
        <>
          <label className="text-lg">Add a role</label> <br />
          <input
            className="my-2 px-2 py-1 border-2 border-solid border-black rounded-md outline-0"
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          ></input>
          <Employee name="Josip" role="CTO" />
          <Employee name="John" role="Senior Developer" />
          <Employee name="Lorem" role={role} />
          <Employee name="Elen" />
        </>
      ) : (
        <>
          <ErrMsg />
        </>
      )}
    </div>
  );
}

export default App;
