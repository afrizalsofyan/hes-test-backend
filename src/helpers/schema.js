const mongoose = require('mongoose')

exports.mahasiswaSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  npm: {
    type: Number,
    unique: true,
    required: true
  },
  alamat: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  hobi: {
    type: [String],
    required: true
  },
})

let addressDetails = this.mahasiswaSchema

addressDetails.alamat = {
  provinsi: String,
  kota: String,
  jalan: String
}