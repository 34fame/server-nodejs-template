import { port } from './config/environment'
import app from './app'
import connectDB from './db'

const start = async () => {
   try {
      await connectDB()
      await app.listen(port)
      console.log(`🚀  GraphQL server running at port: ${port}`)
   } catch (err) {
      console.log('Not able to run GraphQL server', err)
   }
}

start()
