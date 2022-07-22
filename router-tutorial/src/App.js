import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
import { createBrowserHistory } from 'history';

const App = () => {
  const history = createBrowserHistory(window)

  return (
    <div>
      <ul>
        <li>
          <Link to="/">
            홈
          </Link>
        </li>
        <li>
          <Link to="/about">
            소개
          </Link>
        </li>
        <li>
          <Link to="/profiles">
            프로필
          </Link>
        </li>
        <li>
          <Link to="/history">
            History 예제
          </Link>
        </li>
      </ul>
      <hr/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/info' element={<About/>}/>
        <Route path='/profiles/*' element={<Profiles/>}/>
        <Route path='/history' element={<HistorySample/>}/>
        <Route render={() => {
          (<div>
            <h2>이 페이지는 존재하지 않습니다.</h2>
            <p>{history.pathname}</p>
          </div>)
        }}/>
      </Routes>
    </div>
  )
}

export default App;