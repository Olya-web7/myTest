import './App.css';
import Btn from './Btn';
import Files from './Files';
import Messages from './Messages';
import Table from './Table';
import { Users } from './Users';

function App() {
  return (
    <div className="app">
      <Files />
      <Table data={Users}/>
      <Messages />
      <Btn />
    </div>
  );
}

export default App;
