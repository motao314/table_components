import React from 'react';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <Button className="btn" href="http://www.baidu.com" target="_blank">按钮</Button>
      <Button type="link" href="http://www.baidu.com"  target="_blank">按钮</Button>
    </div>
  );
}

export default App;
