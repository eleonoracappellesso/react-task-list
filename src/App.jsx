//import './App.css'
import HeaderComponent from '../components/HeaderComponent';
import NotCompletedTask from '../components/NotCompletedTask';

function App() {
  // parte logica

  // html
  return (
    <>
      <HeaderComponent />
      <main>
        <h2>Current tasks ()</h2>
        <ul>
          <NotCompletedTask />
        </ul>
        <h2>Completed tasks</h2>
        <ul>

        </ul>
      </main>
    </>
  )
}

export default App
