import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


//api to upload appiontment detials

export const uploadDetials = async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/Appoinments`,reqBody)
}

//api to register a user

export const registerUser = async(userDetials)=>{
    return await commonAPI("POST",`${serverURL}/Users`,userDetials)
}