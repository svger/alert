import React from 'react';
import Alert from '../src/index';

class App extends React.Component {

  render() {
    return (
       <div>
         <div>Button Demo</div>
         <Alert
           type="error"
           message='消息内容'
           description='我是提示内容的具体描述'
           showIcon
         />
       </div>
    );
  }
}

export default App;
