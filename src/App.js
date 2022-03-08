import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import HomePage from './components/HomePage'
import Posts from './components/posts/Posts';
import Albums from './components/albums/Albums';
import SinglePost from './components/posts/SinglePost';
import Photos from './components/albums/Photos';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts/:id' element={<SinglePost />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/albums/:id' element={<Photos />} />
        <Route path='/albums' element={<Albums />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
