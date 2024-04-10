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

client와 server를 동시에 npm start하기위한 과정

- yarn : npm과 동일한 기능
- nodemon : node소스가 바뀔때마다 자동으로 노드 서버를 재실행해주는 패키지
- concurrently:나열된 여러개의 명령어를 동시에 실행하는 패키지, yarn dev를 실행하면 yarn server와 yarn client를 동시에 실행
  - --kill-others-on-fail : 나열된 명령어 중 하나라도 실패하면 실행을 취소
  - yarn server : nodemon server.js 실행
  - yarn client : cd client && yarn start실행
- server.js 수정 : 5000번 port를 사용하겠다는 코드 추가
  `` js
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`)); ``
- package.json 수정
  "scripts": {
  "client": "cd client && yarn start",
  "server": "nodemon server.js",
  "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
  },
- yarn dev로 실행 -> concurrently가 yarn server/client동시 실행->server는 nodemon실행, client는 react서버 실행

# 서버 클라이언트 통신

- http통신을 위해 비동기 통신 라이브러리 fetch, axios사용
- fetch : 내장 라이브러리, async/await문법을 사용하여 동기적으로 사용

- axios : 패키지 설치 및 import필요, promise func(then)을 사용하여 동기적으로 사용
