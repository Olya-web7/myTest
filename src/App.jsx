import './App.css';
import Btn from './Btn';
import Files from './Files';
import { FilesList } from './FilesList';
import Messages from './Messages';
import Table from './Table';
import { Users } from './Users';

function App() {
  return (
    <div className="app">
      <Files data={FilesList}/>
      <Table data={Users}/>
      <Messages />
      <Btn />
    </div>
  );
}

export default App;
