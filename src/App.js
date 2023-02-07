import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams, BrowserRouter } from 'react-router-dom';

function App() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const session_id = searchParams.get('session_id');

  const [useData, setUserData] = useState({});

  useEffect (()=>{
  const sendData =async()=>{
    if(id){
      try {
              const data = { session_id: session_id, id:id };
              const response = await axios.post('https://100093.pythonanywhere.com/api/userinfo/', data);
              setUserData(response.data);
            } catch (error) {
              console.error(error);
            }
    }else{
      try {
              const data = { session_id: session_id };
              const response = await axios.post('https://100014.pythonanywhere.com/api/userinfo/', data);
              setUserData(response.data);
              console.log(response.data);
            } catch (error) {
              console.error(error);
            }
    }

  }
  sendData();
}, [])

  // useEffect(() => {
  //   const sendData = async () => {
  //     try {
  //       const data = { session_id: session_id };
  //       const response = await axios.post('https://100014.pythonanywhere.com/api/userinfo/', data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   sendData();
  // }, []);

  // useEffect(() => {
  //   const sendData = async () => {
  //     try {
  //       const data = { session_id: 'un6beoydda13mcno4kv8lsady27motnz', id:'100098' };
  //       const response = await axios.post('https://100093.pythonanywhere.com/api/userinfo/', data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   sendData();
  // }, []);

  return (
    <div className="App">
     <div className="button">
      <button>
        <a href="https://100014.pythonanywhere.com/">LogIn</a>
      </button>
     </div>

     <div className="data">
      <p>Username:{useData.userinfo?.username}</p>
      <p>email:{useData.userinfo?.email}</p>
      <p>phone:{useData.userinfo?.phone}</p>
      <p>country:{useData.userinfo?.country}</p>
     </div>
    </div>
  );
}

export default App;
