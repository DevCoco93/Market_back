import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());

// CORS 설정
app.use(cors());

app.post('/join', (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.status(201).json({ message: 'join successful' });
});

app.get('/get', (req: Request, res: Response) => {
  res.status(200).json({ message: 'GET 요청이 성공적으로 수행되었습니다.' });
});

app.get('/', (req: Request, res: Response) => {
  res.send('hi');
});

const port = 3002;

app.listen(port, () => {
  console.log(`${port} 서버가 실행 중입니다.`);
});
