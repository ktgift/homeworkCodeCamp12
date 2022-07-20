import { useState } from 'react'


function App() {
  const [posts, setPosts] = useState([
    {id: 1, message: 'Good', date: '12-12-2022', sender: 'Jack'},
    {id: 2, message: 'Very Good', date: '05-05-2022', sender: 'M'},
    {id: 3, message: 'Great', date: '12-02-2022', sender: 'Koy'},
    {id: 4, message: 'gooooooood', date: '07-12-2022', sender: 'Ground'},
    {id: 5, message: 'Happy', date: '01-12-2022', sender: 'Gift'},
  ]);

  const lists = posts.map((el) => 
    <li key={el.id}>
      <span style={{color: 'red'}}>Comment: </span>{el.message + " "} 
      <span style={{color: 'red'}}>Date: </span>{el.date + " "}
      <span style={{color: 'red'}}>Sender: </span>{el.sender + " "}
    </li>)

  return (
    <div style={{ margin: '3rem' }}>
      <ul>
        {lists}
      </ul>
     </div>

     
  );
  }

export default App;