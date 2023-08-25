
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


interface Supervisor {
    id : number
    name : string
    email : string
    speciality : string
    interns : string[]
    topics : string[]
}

const useSupervisors = () => {

    const enterpriseId = localStorage.getItem('userId');
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const fetchSupervisors = () =>
    axios
        .get<Supervisor[]>("http://localhost:8080/api/v1/supervisor/byEnterprise/" + enterpriseId)
        .then(res => res.data)

    return useQuery<Supervisor[]>({
        queryKey : ['supervisors'],
        queryFn : fetchSupervisors
    })

}

export default useSupervisors