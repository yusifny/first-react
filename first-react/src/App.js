import './App.css';
import './components/Employee'
import Employee from './components/Employee';
import ErrMsg from './components/ErrorMsg';

function App() {
  const showEmployee = false;
  return (
    <div className="App">
    {showEmployee ? 
    (
      <>
        <Employee name="Josip" surname="Laurel" age="30" role="CTO" />
        <Employee name="Lorem" surname="Hesto" age="28" role="Senior Developer" />
        <Employee name="John" surname="Harvich" age="22" role="Mid Developer"/>
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
