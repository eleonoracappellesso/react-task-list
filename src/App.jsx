//import './App.css'
import HeaderComponent from '../components/HeaderComponent';
import NotCompletedTask from '../components/NotCompletedTask';
import CompletedTask from '../components/CompletedTask';

function App() {
  // parte logica

  // html
  return (
    <>
      <HeaderComponent />
      <main>
        <h3>Current tasks ({NotCompletedTask().length})</h3>
        <ul>
          <NotCompletedTask />
        </ul>
        <hr />
        <h3>Completed tasks ({CompletedTask().length})</h3>
        <ul>
          <CompletedTask />
        </ul>
      </main>
    </>
  )
}

export default App;

