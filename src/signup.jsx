import React from 'react';
import './signup.css';

const Signup = () => {

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // 입력창에 글씨를 쓸 때마다 실행되는 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSignup = async (e) => {
    e.preventDefault(); // 페이지 새로고침 방지!

    // 비밀번호 확인 체크 (보너스 기능! ㅋㅋㅋ)
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않아요!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/signup', { // 주소는 나중에 백엔드 친구한테 물어보고 수정!
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("가입 성공! 🎉");
      } else {
        alert("가입 실패... ㅠㅠ");
      }
    } catch (error) {
      console.error("에러:", error);
    }
  };
  
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
              <input type="text" id="userName" name="name" value={formData.name} onChange={handleChange} placeholder="이름을 입력해 주세요" /> {}
            </div>

            <div className="input-box">
              <label htmlFor="userEmail">이메일</label>
              <input type="email" id="userEmail" name="email" value={formData.email} onChange={handleChange} placeholder="example@livingbook.com" />
            </div>
          </div>

          {/* 보안 정보 섹션 */}
          <div className="input-section">
            <div className="input-box">
              <label htmlFor="userPw">비밀번호</label>
              <input type="password" id="userPw" name="password" value={formData.password} onChange={handleChange} placeholder="8~16자 영문, 숫자 조합" />
            </div>

            <div className="input-box">
              <label htmlFor="userPwConfirm">비밀번호 확인</label>
              <input type="password" id="userPwConfirm" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="비밀번호를 다시 입력하세요" />
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