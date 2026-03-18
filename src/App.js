import React from 'react';
import Signup from './signup'; // 우리가 만든 파일을 불러옵니다

function App() {
  return (
    <div className="App">
      {/* 기본 로고 대신 회원가입 창을 보여줍니다 */}
      <Signup />
    </div>
  );
}

export default App;