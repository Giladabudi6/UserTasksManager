import Users from './usres/Users';
import { getAll } from './utils';
import { useEffect, useState } from 'react';


const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

function Server() {

const [users,setUsers] = useState([])
const [todos,setTodos] = useState([])
const [posts,setPosts] = useState([])


useEffect(() => {
  const fetchData = async () => {
    try {
      const { data: usersData } = await getAll(USERS_URL);
      const { data: todosData } = await getAll(TODOS_URL);
      const { data: postsData } = await getAll(POSTS_URL);

      setUsers(usersData);
      setTodos(todosData);
      setPosts(postsData);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

const todosDetails = {
  todos: todos,
  setTodos: setTodos
};

const postsDetails = {
  posts: posts,
  setPosts: setPosts,
};

  return (
    <>
      <div>
      
      <Users usersData={users}  setUsers={setUsers} todosDetails={todosDetails} postsDetails={postsDetails}/>

      </div>
    </>
  )
}

export default Server




/*


import Users from './Users';
import { getAll } from './utils';
import { useEffect, useState } from 'react';


const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

function Server() {

const [users,setUsers] = useState([])


useEffect(() => {
  const fetchData = async () => {
    try {
      const { data: usersData } = await getAll(USERS_URL);
      const { data: todosData } = await getAll(TODOS_URL);
      const { data: postsData } = await getAll(POSTS_URL);

      const dataBaseCreat = usersData.map(user => {
        const userTodos = todosData.filter(todo => todo.userId === user.id);
        const userPosts = postsData.filter(post => post.userId === user.id);

        return {
          ...user, todos: userTodos, posts: userPosts, };
      });

      setUsers(dataBaseCreat);
      

    } catch (error) {
      console.error('Error fetching data:', error);
    }

  };

  fetchData();
}, []);



  return (
    <>
      <div>
             
      <Users usersData={users}  setUsers={setUsers} />

      </div>
    </>
  )
}

export default Server


*/