import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    const sendData = async () => {
      try {
        const data = { session_id: 'un6beoydda13mcno4kv8lsady27motnz' };
        const response = await axios.post('https://100014.pythonanywhere.com/api/userinfo/', data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    sendData();
  }, []);

  useEffect(() => {
    const sendData = async () => {
      try {
        const data = { session_id: 'un6beoydda13mcno4kv8lsady27motnz', id:'100098' };
        const response = await axios.post('https://100093.pythonanywhere.com/api/userinfo/', data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    sendData();
  }, []);

  return (
    <div className="App">
     <div className="button">
      <button>
        <a href="https://100014.pythonanywhere.com/">LogIn</a>
      </button>
     </div>
    </div>
  );
}

export default App;
