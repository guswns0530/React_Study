import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Profile from "./Profile"
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
    const style = {
        background: 'black',
        color: 'white'
    }
    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <NavLink style={style} to="/profiles/velopert">velopert</NavLink>
                </li>
                <li>
                    <NavLink style={style} to="/profiles/gildong">gildong</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path='/' render={
                    () => (<div>사용자를 선택해 주세요.</div>)
                }/>
                <Route path='/:username' element={<Profile/>}></Route>
            </Routes>
            <WithRouterSample/>
        </div>
    )
}

export default Profiles;