import React from 'react';
import Alert from '../src/index';

class App extends React.Component {

  render() {
    return (
       <div>
         <div>Button Demo</div>
         <Alert
           type="succ"
           message='我是消息内容,我的showIcon为false'
           showIcon={false}
         />
         <Alert
           type="info"
           message='我是消息内容'
           showIcon
         />
         <Alert
           type="warning"
           message='我是消息内容'
           showIcon
         />
         <Alert
           type="error"
           message='我是消息内容我是消息内容我是消息内容我是消息内容我是消息内容我是消息内容我是消息内容我是消息内容我是消息内容'
           showIcon
         />
         <Alert
           type="succ"
           message='我是消息内容'
           showIcon
           description='我是内容的具体描述'
         />
         <Alert
           type="info"
           message='我是消息内容'
           showIcon={false}
           description='我的showIcon为false'
         />
         <Alert
           type="warning"
           message='我是消息内容'
           showIcon
           description='我是内容的具体描述'
         />
         <Alert
           type="error"
           message='我是消息内容我是消息内容我是消息内容我是消息内容我是消息内容我是消息内容'
           showIcon
           description='我是内容的具体描述我是内容的具体描述我是内容的具体描述我是内容的具体描述我是内容的具体描述我是内容的具体描内容的具体描述'
         />
       </div>
    );
  }
}

export default App;
