import { useState } from 'react'


function App() {
  const [posts, setPosts] = useState([
    { id: '1', message: 'Happy new year', date: '01-06-2022 00.01 AM', author: 'John'},
    { id: '2', message: 'Programing', date: '01-07-2022 10.23AM', author: 'Jack'},
    { id: '3', message: 'Oh Amazing !!!', date: '01-19-2022 08.17PM', author: 'Sarah'}
  ]);

  const lists = posts.map((el) => 
    <div key={el.id} style={{border: '1px solid #000', padding: "0.5rem", margin: "10px 10px"}}>
        <h2 style={{marginTop: 5}}>{el.message}</h2>
        <span>Author: {el.author}</span>
        <span style={{marginLeft: '80%'}}>{el.date}</span>
    </div>
  )

  return (
    <div>
      {lists}
    </div>
  );
  }

export default App;