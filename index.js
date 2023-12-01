const express = require('express');
const app = express();

app.use(express.static('reports'));

// Start the server
const PORT = process.env.PORT || 7921;
app.listen(PORT, () => {
  console.log(`Access reports under http://localhost:${PORT} followed by folder name`);
});