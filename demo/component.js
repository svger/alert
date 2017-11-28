import React from 'react';
import MsgTemplate from '../src/index';

class App extends React.Component {

  render() {
    return (
       <div>
         <div>Button Demo</div>
         <MsgTemplate
           status="fail"
           msgResult='消息结果'
           resuCause='结果原因'
         />
       </div>
    );
  }
}

export default App;
