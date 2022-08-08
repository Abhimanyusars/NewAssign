import React from 'react';
import DropboxChooser from 'react-dropbox-chooser';
import { useState } from 'react';


const APP_KEY = "vneeimtjtjr1vo7";

const Dropbox = () => {
    const [url,setUrl] = useState("")
  const handleSuccess = (files) => {
    setUrl(files[0].thumbnailLink)
    console.log(url)
  }
  return (
    <div className='App'>
        <h1 style={{textAlign: "center"}}>Upload or choose files from Dropbox</h1>
      <br></br>
      <br/>
      <div className='container'>
        <DropboxChooser appKey={APP_KEY}
          success={handleSuccess}
          cancel={() => console.log('closed')}
          multiselect={true}>
            <button>Upload or Choose Files</button>
            <div className="dropbox"></div>
        <br/><br/>
        <img src={url} width="20" height="20" alt=""/>
          </DropboxChooser>
      </div>
    </div>
  )
}

export default Dropbox