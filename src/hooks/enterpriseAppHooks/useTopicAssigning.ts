import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useToast } from '@chakra-ui/react';
import { Error } from "../authHooks/useLogin";


interface assignRequest {
    internId : number,
    topicId : number
}



const useTopicAssigning = () => {

    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const toast = useToast();
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn : ({topicId, internId} : assignRequest) =>
            axios
                .put("http://localhost:8080/api/v1/topics/assign/" + topicId.toString() + "/to/intern=/" + internId.toString()),

            onSuccess : () =>{
                queryClient.invalidateQueries({
                    queryKey : ['topics']
                });

                toast({
                    title: 'Topic assigned successfully',
                    description: "",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                  })
            },
            onError : (error : AxiosError<Error>) => {
                const errorMessage = error.response?.data.errorMessage;
                console.log(errorMessage);
                
                toast({
                    title: 'Opps !',
                    description: errorMessage,
                    status: 'error',
                    duration: 4000,
                    isClosable: true,
                  })
            }
        }
    )


}

export default useTopicAssigning;

