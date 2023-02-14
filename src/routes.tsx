import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { TodoList } from './pages/TodoList';

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/todo" element={<TodoList/>}/>
        </Routes>
    )
}