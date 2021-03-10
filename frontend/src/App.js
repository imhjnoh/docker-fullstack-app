import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(() => {
    // 여기서 db에 있는 값을 가져온다.
    axios.get(`/api/hi`)
    .then(response => {
      console.log('response', response);
      // setLists(response.data)
    })
  }, [])

  useEffect(() => {
    // 여기서 db에 있는 값을 가져온다.
    axios.get(`/api/values`)
    .then(response => {
      console.log('response', response);
      setLists(response.data)
    })
  }, [])

  const changeHandler = (event) => {
    setValue(event.currentTarget.Value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post(`/api/value`, {value: value})
    .then(response => {
      if(response.data.success){ // server.js에서 success 가 true이면.
        console.log('response', response);
        setLists([...lists, response.data])
        setValue(""); // 전송하고 나면 없애줌.
      }else{
        alert("값을 넣는 데에 실패했습니다.")
      }
    })
  }

  const [lists, setLists] = useState([])
  const [value, setValue] = useState("")



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">

          {lists && lists.map((list, index) => (
            <li key={index}>{lists.value}</li>
            // 리액트에서 맵 쓰면 항상 키값을 줘야함.
          ))}

          <form className="example" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="입력해주세요"
              onChange = {changeHandler}
              value = {value}
              />
              <button type="submit">확인</button>

          </form>
         </div>

      </header>
    </div>
  );
}

export default App;
