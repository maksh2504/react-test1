import React, {useState} from 'react';
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import IPost from "./types/post";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id: '1', title: 'Javascript', body: 'Javascript is programing language.'},
        {id: '2', title: 'Javascript', body: 'Javascript is programing language.'},
        {id: '3', title: 'Javascript', body: 'Javascript is programing language.'},
        {id: '4', title: 'Javascript', body: 'Javascript is programing language.'},
    ])

  return (
    <div className="App">
        <form>
            <input type='text' placeholder='Название поста'/>
            <input type='text' placeholder='Описание поста'/>
            <button>Submit</button>
        </form>
        <PostList posts={posts} title='Список постов'/>
    </div>
  );
}

export default App;
