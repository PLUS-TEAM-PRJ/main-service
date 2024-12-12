const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API
const KAKAO_REDIRECT_URI = `http://localhost:4000/oauth`
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`

const LoginPage: React.FC = () => {
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL
  }
  return (
    <div>
      <h1>👋</h1>
      <h2>플러스집</h2>
	  <button onClick={handleKakaoLogin}>
        <img src="/img/kakao_login_medium_wide.png" alt="카카오 로그인" style={{ width: '100%', height: '100%' }} />
      </button>
    </div>
  )
}

export default LoginPage
