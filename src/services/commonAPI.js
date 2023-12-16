import axios from "axios"

export const commonAPI = async (httpmethod,url,reqBody)=>{
    let reqConfig ={
            method: httpmethod,
            url,
            data: reqBody,
            Headers:{
                "Content-Type": "multipart/form-data"
            }    
    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}