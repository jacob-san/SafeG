/**
 * Created by sandeepj on 19/6/17.
 */
import React from 'react';
import UserList from '../containers/user-list';
require('../../scss/style.scss')

const App = ()=>(
  <div>
      <h2>Username List:</h2>
      <UserList/>
      <hr/>
      <h2>User Details:</h2>
  </div>
);
export default App;