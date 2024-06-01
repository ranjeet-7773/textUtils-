import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About'
import Alert from './Components/Alert'
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
*/
function App() {

 const [alert,setAlert]=useState(null)

 let showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },2000)
 }

  
  const [mode,setMode]=useState('light');

  const toggleMode= ()=>{
    if(mode=='dark'){
       
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("light mode is enabled","success")
      document.title="Text Utils- Light Mode"
     
      
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='black'
      showAlert("dark mode is enabled","success")
      document.title="Text Utils- Dark Mode"
    }
  }

/*  const [mode2,setMode2]=useState('light');

  const toggleMode2= ()=>{
    if(mode=='#03351e'){
       
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("light mode is enabled","success")
      document.title="Text Utils- Light Mode"
     
      
    }
    else{
      setMode('#03351e')
      document.body.style.backgroundColor='#03351e'
      showAlert("green mode is enabled","success")
      document.title="Text Utils- Green Mode"
    }
  }
*/

  
  return (
  
    <>
   {/*  <Router>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} mode2={mode2} toggleMode2={toggleMode2}/>
      <Alert alert={alert} />  
      <div className='container my-3 '>
    <Switch>
      <Route path='/about'>
        <About/>
      </Route>
    <Route path='/'>
    <TextForm heading="Enter the text to analyze below " mode={mode}/> 
    </Route>
     </Switch>
    </div>
  </Router>  */}

<Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} /* mode2={mode2} toggleMode2={toggleMode2}  */ />
      <Alert alert={alert} />  
      <div className='container my-3 '>
      <TextForm showAlert={showAlert} heading="Try TextUtils-Word counter,Character counter, Copy text " mode={mode}/> 
      </div>
    </>
  )
}

export default App
