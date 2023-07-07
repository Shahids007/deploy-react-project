// import logo from './logo.svg';
import './App.css';
import './components/TextForm';

import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/alert';


// import About from './components/about';
function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = ()=>{
    if(mode=== 'light'){
      setmode('dark')
      document.body.style.backgroundColor= 'grey'
      showAlert('Dark Mode has been Enabled','success');
      document.title = "TextUtils-DarkMode"
    }
    else{
      setmode('light')
      document.body.style.backgroundColor= 'white'
      showAlert('Light Mode has been Enabled','success')
      document.title = "TextUtils-LightMode"
    }
  }

return (
  <>
<Navbar tittle= "TextUtils" abouttext ="About TextUtils"  mode= {mode} toggleMode={toggleMode}/>
{/* <Navbar/> */}
<Alert alert= {alert}/>

<div className="container my-3">
   <TextForm showAlert={showAlert} heading= "write your thought here" mode={mode}/>
   {/* <About/> */}
</div>
  </>
);
}

export default App;
