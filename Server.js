const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/proxy', async (req, res) => {
  try {
    const url = req.query.url;
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
