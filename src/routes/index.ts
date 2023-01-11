import { Router } from "express"

import {addNewMahasiswa, deleteMahasiswa, getAllMahasiswa, getDetailsMahasiswa, updateMahasiswa} from '../controllers/mahasiswaController'

const route = Router()

route.get('/mahasiswa', getAllMahasiswa)
route.get('/mahasiswa/:id', getDetailsMahasiswa)
route.post('/mahasiswa/add', addNewMahasiswa)
route.put('/mahasiswa/:id', updateMahasiswa)
route.delete('/mahasiswa/:id', deleteMahasiswa)

export default route