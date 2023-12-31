import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useToast } from '@chakra-ui/react';
import { Error } from "../authHooks/useLogin";



const useTopicDelete = (topicId : number) => {

    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const topicID = topicId.toString();
    const queryClient = useQueryClient()



    const toast = useToast();
    
    return useMutation({
        mutationFn : () =>
            axios
                .delete("http://localhost:8080/api/v1/topics/delete/" + topicID)
                .then(res => console.log(res.data)
                ),

            onSuccess : () =>{

                // invalidate the cache
                queryClient.invalidateQueries({
                    queryKey : ['topics']
                });
                toast({
                    title: 'Topic deleted successfully',
                    description: "",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                  });

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

export default useTopicDelete;