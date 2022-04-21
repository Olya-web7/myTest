import './App.css';
import Btn from './Btn';
import Datatable from './datatable/Datatable';
import Files from './Files';
import { FilesList } from './FilesList';
import Messages from './Messages';
import MyTable from './MyTable';
import { Users } from './Users';

function App() {
  return (
    <div className="app">
      <Files data={FilesList}/>
      <Datatable data={Users}/>
      <MyTable data={Users}/>
      <Messages />
      <Btn />
    </div>
  );
}

export default App;
