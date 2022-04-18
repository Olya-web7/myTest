import './App.css';
import Table from './Table';
// import User from './user';
import { Users } from './Users';

function App() {
  return (
    <div className="app">
      <Table data={Users}/>
    </div>
  );
}

export default App;
