import React, { useEffect, useState } from 'react'
import '/src/App.css'

const App = () => {

  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    fetch("https://blog-server-f56g.onrender.com/api/get-subscribers")
    .then((response) => response.json())
    .then((data) =>{
      setSubscribers(data);
    })
    .catch((error) => {
      alert("Error fetching subscribers");
    });
  },[]);
  return(
    <>
    <h1>Ampte B Marak</h1>
    <p>Welcome to the Blog of <span>Ampte B Marak</span></p>
    <div className='subscribers'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Subscribed on</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber) => (
            <tr key={subscriber.id}>
              <td>{subscriber.id}</td>
              <td>{subscriber.subscribed_date}</td>
              <td>{subscriber.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default App;