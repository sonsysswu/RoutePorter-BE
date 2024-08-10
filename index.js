import express from 'express';
import { specs } from './config/swagger.config.js';
import SwaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import askRoute from './src/routes/chatgpt.js'; // .js 확장자 주의
import route from './src/routes/route.js';




dotenv.config();

const app = express();
const port = 3000;

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// 라우터 설정
app.use('/', askRoute);
app.use('/routes', route);

// Swagger 문서 설정
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));

// 기본 라우트
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// app.get('/routes', (req, res)=>{
//     res.send('작동 중');
//     })

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


