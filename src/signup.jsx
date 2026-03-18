import React from 'react';
import './signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <header className="signup-header">
          <h1 className="logo">Living Book</h1>
          <p className="subtitle">새로운 지식의 기록, 시작해보세요</p>
        </header>

        <form className="signup-form">
          {/* 기본 정보 섹션 */}
          <div className="input-section">
            <div className="input-box">
              <label htmlFor="userName">이름</label>
              <input type="text" id="userName" placeholder="이름을 입력해 주세요" />
            </div>

            <div className="input-box">
              <label htmlFor="userEmail">이메일</label>
              <input type="email" id="userEmail" placeholder="example@livingbook.com" />
            </div>
          </div>

          {/* 보안 정보 섹션 */}
          <div className="input-section">
            <div className="input-box">
              <label htmlFor="userPw">비밀번호</label>
              <input type="password" id="userPw" placeholder="8~16자 영문, 숫자 조합" />
            </div>

            <div className="input-box">
              <label htmlFor="userPwConfirm">비밀번호 확인</label>
              <input type="password" id="userPwConfirm" placeholder="비밀번호를 다시 입력하세요" />
            </div>
          </div>

          <button type="submit" className="signup-submit-btn">가입하기</button>
        </form>

        <footer className="signup-footer">
          이미 계정이 있으신가요? <a href="/login">로그인</a>
        </footer>
      </div>
    </div>
  );
};

export default Signup;