import './App.css';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className={"w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pt-[100px]"}>
            <TodoList/>
        </div>
    );
}

export default App;
