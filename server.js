const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const color = require('colors')
const connectDB = require('./config/connectDB')
//config dot env file
dotenv.config();

//database call
connectDB();

//rest object
const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.use('/api/v1/users', require('./routes/userRoute'))

app.use('/api/v1/transections', require('./routes/transectionRoutes'))

//port
const PORT = 8080 || Process.env.PORT

//listen server
app.listen(PORT, () => {
    console.log(`server runing on port ${PORT}`)
})