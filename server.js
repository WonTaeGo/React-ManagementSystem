const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/api/customers', (req,res) => {
    res.send([
          {
            'id': 1,
            'image': 'https://placeimg.com/64/64/any',
            'name': '고원태',
            'birthday': '971222',
            'gender': '남자',
            'job': '대학생'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/63/63/any',
            'name': '홍길동',
            'birthday': '960122',
            'gender': '남자',
            'job': '대학생'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/62/62/any',
            'name': '이순신',
            'birthday': '961212',
            'gender': '남자',
            'job': '대학생'
          }
          
    ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));