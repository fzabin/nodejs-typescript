import express, { Response } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect('mongodb://localhost:27017/tsnode', {
      useNewUrlParser: true
    })
  }

  private routes (): void {
    this.express.get('/', (req, res): Response => {
      return res.send('Hello, world!')
    })
  }
}

export default new App().express