const express = require('express');
const app = express();

const PORT = 3000 || process.env.PORT 


app.use(express.static('./public'))

app.listen(PORT,()=>{
      console.log(`Server is running at port ${PORT}....`)
})