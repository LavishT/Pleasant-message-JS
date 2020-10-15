import React, { useState } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Greeting from './components/Greeting';
import { Jumbotron } from 'react-bootstrap';
function App(){
const [name, setName] = useState('')
return(
    <div className='App'> 
  <input
    style={ { marginTop: '20px', padding: '5px 10px' }}
    placeholder = 'Enter Your Name'
    value={name}
    onChange={e=> setName(e.target.value)}
    
  />
  <Greeting name={name}/>
</div>
)
}
export default App;