import './App.css';
import Btn from './button/Btn';
import Files from './files/Files';
import { FilesList } from './files/FilesList';
import Messages from './message/Messages';
import MyTable from './table/MyTable';
import { Users } from './table/Users';

function App() {
  return (
    <div className="app">
      <Files data={FilesList}/>
      <MyTable data={Users}/>
      <Messages />
      <Btn />
    </div>
  );
}

export default App;
