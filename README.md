# client

1. useEffect : return으로 뿌리는 화면 랜더링 후에 동작
2. server의 정보를 호출(callApi함수)

- 오류방지 try-catch
- async - await
- CORS오류 방지
  1. npm install --save cors -> const cors = require("cors"); app.use(cors());
  2. client package.json에 추가 "proxy": "http://127.0.0.1:5000/"

# server

- express-generator을 이용하여 express 프로젝트 생성
- bin > www 파일을 기본으로 동작

# 추가 사용 기술

- proxy : 서버와 클라이언트 중계를 위한 서버

  - 실제 서버에 접근하여 생기는 보안 문제 방지
  - 호출URL 간소화
  - CORS(Cross-Origin Resources Sharing)설정 필요없음(다른 포트나 도메인의 서버의 자원을 가져오는것을 지원)

- HTTP통신 : GET , POST사용
