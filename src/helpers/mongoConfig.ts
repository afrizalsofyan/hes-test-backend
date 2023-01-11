import mongoose from "mongoose"


const client = async () => {
  const MONGO_URI = process.env.MONGO_URI
  try {
    mongoose.set({strictQuery: true})
    if(MONGO_URI){
      await mongoose.connect(MONGO_URI)
      console.log('DB connected')
    }
  } catch (error) {
    if(error instanceof Error){
      console.log('Something wrong.', error.message)
    }
  }
}

export default client