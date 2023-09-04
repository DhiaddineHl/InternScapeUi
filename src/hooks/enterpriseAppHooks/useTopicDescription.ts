import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useTopicDescription = (topicId : number) => {

    const topicID = topicId.toString();
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    const fetchDescription = () =>
    axios
        .get<string>("http://localhost:8080/api/v1/topics/description/" + topicID)
        .then(res => res.data)

    return useQuery<string>({
        queryKey : ['topic', topicID, "description"],
        queryFn : fetchDescription
    })

}

export default useTopicDescription;