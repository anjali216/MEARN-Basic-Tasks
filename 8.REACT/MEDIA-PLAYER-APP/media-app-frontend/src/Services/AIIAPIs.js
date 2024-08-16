import {serverURL} from './serverURL';
import {commonAPI} from './commonAPI';

export const addVideoAPI =async(reqBody)=>{
    return await commonAPI ('post',`${serverURL}/allVideos`),reqBody
}



//get all API Call from Json-server =>get=>localhost:3000/allVideos 

//get a particular video from json-server =>get =>localhost:3000/allVideos

// delete a video from json-server => delete=> localhost :3000/allVideos

//add History API call=>post =>localhost : 3000/watchHistory


//get History API call=>get =>localhost :3000/watchHistory


//get category API call=>get =>localhost :3000/category


//delete category API call=>delete  =>localhost :3000/category


//update category API call=>put  =>localhost :3000/category