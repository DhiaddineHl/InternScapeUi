
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import UserCredentialsSetter from "../../stores/UserCredentialsSetter"


export interface Topic {
    id : number
    title : string
    description : string
    duration : string
    isAvailable : boolean
    internName : string,
    supervisorName : string
    activities : Activity[]
}

interface Activity {
    id : number
    title : string
    description : string
    durartion : string
}

const useTopics = () => {

    const enterpriseId = localStorage.getItem('userId');
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


    const fetchInterns = () =>
    axios
        .get<Topic[]>("http://localhost:8080/api/v1/topics/byEnterprise/" + enterpriseId)
        .then(res => res.data)

    return useQuery<Topic[]>({
        queryKey : ['topics'],
        queryFn : fetchInterns
    })

}

export default useTopics