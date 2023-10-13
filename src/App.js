import logo from './logo.svg';
import './App.css';
import Crud from './CRUD/crud';
import Parent from './ChildToParent/Parent';
import exploredata from "./JsonData/jsonData"
import DisplayFolder from "./JsonData/Display"
//import Index from './Pagination';
import Employee from './Machine_code/EmployeeDB';
import HookEx from './hookEx';
import ReactApp from './ReactApp';

function App() {
  console.log("exploredata1",exploredata)
  return (
    <div className="App">
     {/* <Crud></Crud> */}
    {/* <Parent></Parent>  */}
    {/* <DisplayFolder exploredata={exploredata}></DisplayFolder> */}
{/* <Index></Index> */}
{/* <Employee/> */}
<HookEx/>
{/* <ReactApp/> */}
    </div>
  );
}

export default App;
