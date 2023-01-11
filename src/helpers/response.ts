import { Response } from "express"

interface IResponse {
  res: Response,
  msg: string,
  data?: any,
  dataInfo?: any,
  status: number
}

const responseJSON = (res: Response, msg: string, data?: any, dataInfo?: any, status: number = 200) => {
  let success = true
  let docs: any
  const datas = {
    success,
    message: msg,
    docs: docs
  }
  if(status >= 400) {
    success = false    
  }
  if(data){
    datas.docs = data
  }
  if(dataInfo){
    data.infoPage = dataInfo
  }

  return res.status(status).json(datas)
}

export default responseJSON