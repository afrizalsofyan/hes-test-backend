import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'
import client from './src/helpers/mongoConfig'
import routes from './src/routes'

dotenv.config()

const app:Express = express()
const PORT = process.env.PORT || 3333

client()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', routes)

const test = (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: "welcome to the server..."
  })
}
app.get('/', test)

app.listen(PORT, ()=>console.log(`server runinng ${PORT}`))