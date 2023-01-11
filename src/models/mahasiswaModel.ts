import mongoose from "mongoose"
import { mahasiswaSchema } from "../helpers/schema"

const mahasiswaModel = mongoose.model('Mahasiswa', mahasiswaSchema)

export default mahasiswaModel