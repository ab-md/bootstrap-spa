import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import HomePage from './components/HomePage'
import Posts from './components/posts/Posts';
import Users from './components/users/Users';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
