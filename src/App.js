import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskListContextImplementation from './context/TaskListContextImplmentation';

function App() {
  return (
    <div className="App">
      <TaskListContextImplementation>
        <div className="container">
          <div className="app-wrapper">
            <Header />
            <div className="main">
              <TaskForm />
              <TaskList />
            </div>
          </div>
        </div>
      </TaskListContextImplementation>
    </div>
  );
}

export default App;
