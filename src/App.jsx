import './App.css';
import Button from './Button';
import Messages from './Messages';
import Table from './Table';
import { Users } from './Users';

function App() {
  return (
    <div className="app">
      <Table data={Users}/>
      <Messages />
      <Button />
    </div>
  );
}

export default App;
