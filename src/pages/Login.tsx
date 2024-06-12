const Login = () => {
  const handleGoogle = () => {
    // Google의 OAuth 2.0 서버로 리디렉션하기
    const CLIENT_ID =
      "245525309827-icce94n9cfrchgsh8nijjic5v3tomm0b.apps.googleusercontent.com";
    const REDIRECT_URI = "http://localhost:5173/oauth/google";

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email profile`;
  };

  const handleNaver = () => {
    const CLIENT_ID = "vCTBlVUq4VWvzYKqUOPG";
    const REDIRECT_URI = "http://localhost:5173/oauth/naver";
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=test&redirect_uri=${REDIRECT_URI}`;
  };

  return (
    <div>
      <button onClick={handleGoogle}>구글</button>
      <button onClick={handleNaver}>네이버</button>
    </div>
  );
};

export default Login;
