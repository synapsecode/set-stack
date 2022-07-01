const app = require('./backend/app');
const port = process.env.EXPPORT || 80;

const server = app.listen(port, (err) => {
  console.log(
    `[EXPRESS@${server.address().address}${server.address().port}] Online and listening`
  );
});
