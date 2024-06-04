import  {useMutation} from "react-query"
import axios from "axios"

   export async function registerApi( values){
    return axios.post("http://localhost:3000/api/user/register", values)
  }
  export  async function loginApi( values){
    return axios.post("http://localhost:3000/api/user/login",values )
  }

