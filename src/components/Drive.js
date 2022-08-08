import React, { useEffect } from 'react';
import useDrivePicker from "react-google-drive-picker";


const Drive = () => {

    const [openPicker, data, authResponse] = useDrivePicker();

    const handleOpenPicker = () => {
        openPicker({
            clientId:"625844992493-r3o6cit2mi8g29jvnmce44ej1f22vkrq.apps.googleusercontent.com",
            developerKey:"AIzaSyBGLmKU6evRX154ZnnUk_X-lOfZ0BN2Pcc",
            viewId:"DOCS",
            showUploadView: true,
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true
        })
    }
    useEffect(() => {
        if (data) {
            data.docs.map((i) => console.log(i))
        }
    }, [data])

  return (
    <div>
        <h1>Choose files from Google Drive</h1>
        <button onClick={() => handleOpenPicker()}>Open Google Drive</button>
    </div>
  )
}

export default Drive