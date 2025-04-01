


import authRoutes from "./Routes/authRoutes.ts"

import express from "express"

const app = express()

app.use(express.json())

app.use("/api/auth",authRoutes)

app.listen(5000,()=>{
  console.log('server running at 5000 port')
})