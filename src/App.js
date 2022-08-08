import React from 'react';
import './App.css';
import Drive from './components/Drive';
import Dropbox from './components/Dropbox';
import Searchterm from './components/Searchterm/Index';


// const APP_KEY = "vneeimtjtjr1vo7";

function App() {
  // const [url,setUrl] = useState("")
  // const handleSuccess = (files) => {
  //   setUrl(files[0].thumbnailLink)
  //   console.log(url)
  // }
  
  return (
    <div className="App">

      <Drive></Drive>
      <Dropbox></Dropbox>
      <Searchterm></Searchterm>
      
      
      
    </div>
    
  );
}

export default App;
