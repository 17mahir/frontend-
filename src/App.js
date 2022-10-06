import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
=======
import Student from './components/Student';
import StudentList from './components/StudentList';
>>>>>>> 06a4b4b5d2b634c9ee10f6cb44175c84f85e2852

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
      <Student/>
      <StudentList/>
>>>>>>> 06a4b4b5d2b634c9ee10f6cb44175c84f85e2852
    </div>
  );
}

export default App;
