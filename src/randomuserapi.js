import axios from "axios";
export const getemployees = function(){
    return axios.get("https://randomuser.me/api/?results=30")
}