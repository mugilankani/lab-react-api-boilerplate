import { useState } from 'react'
import './App.css'

import axios from 'axios'; 
import { useEffect } from 'react';


function App() {
  const [data , setData] = useState([])

  useEffect(() => {
    axios
    .get("https://reactnd-books-api.udacity.com/books",
    { headers: { 
      'Authorization': 'whatever-you-want' 
    }
  }
      
      
      ).then( (res) => {
        const data = res.data.books
        setData(data)
        {console.log(data)}
        
      })

  },[])

  return (
    <div className='App'>
      {
        data.map((item) => {
          return(

          <div key={item.id}>
            <h4>
              {item.title}
            </h4>
            <div className='flexDiv'>
              <img 
              
              src={item.imageLinks.thumbnail}
              alt={item.title}
              />
              <p>{item.description}</p>

            </div>
            <h4>{item.authors}</h4>
            <hr />
          </div>
          )
        })
      }
    </div>
  )
}

export default App
