import './App.css';
import './components/Employee'
import Employee from './components/Employee';
import ErrMsg from './components/ErrorMsg';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState();
  const showEmployee = true;
  return (
    <div className="App">
    {showEmployee ? 
    (
      <>
        <label>Add a role</label> <br/>
        <input type="text" onChange={ (e) => {
            setRole(e.target.value)
        }}></input>
        <Employee name="Josip" surname="Laurel" age="30" role="CTO" />
        <Employee name="John" surname="Hesto" age="28" role="Senior Developer" />
        <Employee name="Lorem" surname="Harvich" age="22" role={role}/>
        <Employee name="Elen" surname="Soya" age="24"/>
      </>
    ) :
    <>
      <ErrMsg />
    </>
    }
    </div>
  );
}

export default App;
