
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


interface Intern {
    id : number
    name : string
    email : string
    speciality : string
    topicTitle : string
    supervisor : string
}

const useInterns = () => {

    const enterpriseId = localStorage.getItem('userId');
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const fetchInterns = () =>
    axios
        .get<Intern[]>("http://localhost:8080/api/v1/intern/byEnterprise/" + enterpriseId)
        .then(res => res.data)

    return useQuery<Intern[]>({
        queryKey : ['interns'],
        queryFn : fetchInterns
    })

}

export default useInterns