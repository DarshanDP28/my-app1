
import React from 'react';
import CreateResource from './components/CreateResource';
import UpdateResource from './components/UpdateResource';

function App() {
  return (
    <div className="App">
      <h1>Create and Update Resources</h1>
      <CreateResource />
      <hr />
      <UpdateResource resourceId="1" />
    </div>
  );
}

export default App;
