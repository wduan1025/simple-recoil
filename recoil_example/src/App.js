import React  from 'react';
import LeftBox from './components/leftBox';
import RightBox from './components/rightBox';

const App = (props) => {
    return (
      <div style={{display: "flex", flexDirection: "row"}}>
        <LeftBox />
        <RightBox />
      </div>
    );
}

export default App;
