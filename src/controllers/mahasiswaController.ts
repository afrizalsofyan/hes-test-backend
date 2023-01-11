import { Request, Response } from "express"
import responseJSON from "../helpers/response"
import mahasiswaModel from "../models/mahasiswaModel"

interface IData {
  nama: string,
  npm: number,
  alamat: {provinsi: string, kota: string, jalan: string},
  hobi: string[]
}

export const getAllMahasiswa = async (_: Request, res: Response) => {
  try {
    const mahasiswa = await mahasiswaModel.find()
    return responseJSON(res, 'all mahasiswa', mahasiswa)
  } catch (error) {
    if(error instanceof Error){
      console.log('Error', error.message)
    }
  }
}
export const getDetailsMahasiswa = async (req: Request, res: Response) => {
  const {id} = req.params
  try {
    const mahasiswa = await mahasiswaModel.findById(id)
    console.log(mahasiswa)
    return responseJSON(res, 'detail mahasiswa', mahasiswa)
  } catch (error) {
    if(error instanceof Error){
      console.log('Error', error.message)
    }
  }
}
export const addNewMahasiswa = async (req: Request, res: Response) => {
  let {nama, npm, provinsi, kota, jalan, hobi} = req.body
  const alamat = {
    provinsi,
    kota,
    jalan
  }
  if(npm) {
    npm = parseInt(npm, 10)
  }
  if(hobi) {
    hobi = hobi.split(',')
  }
  
  try {
    const mahasiswa = await mahasiswaModel.create({
      nama,
      npm,
      alamat,
      hobi
    }) 
    return responseJSON(res, 'success to add new mahasiswa', {nama: mahasiswa.nama, npm: mahasiswa.npm, alamat: mahasiswa.alamat, hobi: mahasiswa.hobi})
  } catch (error) {
    if(error instanceof Error){
      console.log('Error', error)
    }
  }
}
export const updateMahasiswa = async (req: Request, res: Response) => {
  const {id} = req.params
  let {nama, npm, provinsi, kota, jalan, hobi} = req.body
  try {
    let query: IData = {nama, npm, alamat: {provinsi, kota, jalan}, hobi}
    if(nama){
      query.nama = nama
    } 
    if (npm) {
      npm = parseInt(npm, 10)
      query.npm = npm
    } 
    if(provinsi) {
      console.log(provinsi)
      query.alamat.provinsi = provinsi
      if(kota) {
        query.alamat.kota = kota
      } 
      if(jalan) {
        query.alamat.jalan = jalan
      } 
    } else {
      return responseJSON(res,'please fill the provience first.', null,null, 400 )
    }
    if(hobi) {
      hobi = hobi.split(',')
      query.hobi = hobi
    }
    const mahasiswa = await mahasiswaModel.findByIdAndUpdate(id, {...query}, {returnOriginal: false, new: true})
    if (mahasiswa){
      return responseJSON(res, 'success to update mahasiswa', {nama: mahasiswa.nama, npm: mahasiswa.npm, alamat: mahasiswa.alamat, hobi: mahasiswa.hobi})
    }
  } catch (error) {
    if(error instanceof Error){
      console.log('Error', error.message)
    }
  }
}
export const deleteMahasiswa = async (req: Request, res: Response) => {
  const {id} = req.params
  try {
    await mahasiswaModel.findByIdAndDelete(id)
    return responseJSON(res, 'delete mahasiswa is success')
  } catch (error) {
    if(error instanceof Error){
      console.log('Error', error.message)
    }
  }
}