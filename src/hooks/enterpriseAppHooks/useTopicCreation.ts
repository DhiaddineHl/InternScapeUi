import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useToast } from '@chakra-ui/react';
import { Error } from "../authHooks/useLogin";
import TopicCreationModalVisibility from "../../stores/TopicCreationModalVisibility";
import { Topic } from "./useTopics";


interface TopicCreationRequest {
    title : string;
    description : string;
    duration : string;
    field : string;
}



const useTopicCreation = () => {

    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const enterpriseId = localStorage.getItem('userId');


    const toast = useToast();
    const closeModal = TopicCreationModalVisibility(s => s.onCloseTopicCration);
    const queryClient = useQueryClient()
    
    return useMutation({
        mutationFn : (creationRequest : TopicCreationRequest) =>
            axios
                .post("http://localhost:8080/api/v1/topics/create/forEnterprise/" + enterpriseId, creationRequest)
                .then(res => console.log(res.data)
                ),

            onSuccess : () =>{

                // invalidate the cache
                queryClient.invalidateQueries({
                    queryKey : ['topics']
                });
                //update the data in the cache
                // queryClient.setQueryData<Topic[]>(['topics', enterpriseId], topics => {
                //     return [...topics || [], {
                //         title : creationRequest.title,
                //         description : creationRequest.description,
                //         duration : creationRequest.duration,
                //         field : creationRequest.field,
                //         enterprise : {
                //             id : enterpriseId
                //         }
                //     }]
                // })
                toast({
                    title: 'Topic created successfully',
                    description: "",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                  });
                  closeModal();
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

export default useTopicCreation;
