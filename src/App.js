// import logo from './logo.svg';
import './App.css';
import './components/TextForm';

import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
function App() {
return (
  <>
<Navbar tittle= "TextUtils" abouttext ="About TextUtils" />
{/* <Navbar/> */}

<div className="container my-3">
   <TextForm heading= "write your thought here"/>
</div>
  </>
);
}

export default App;
