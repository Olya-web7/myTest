import './App.css';
import Messages from './Messages';
import Table from './Table';
import { Users } from './Users';

function App() {
  return (
    <div className="app">
      <Table data={Users}/>
      <Messages />
    </div>
  );
}

export default App;
