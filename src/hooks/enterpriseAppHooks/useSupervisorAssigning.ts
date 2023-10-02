import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useToast } from '@chakra-ui/react';
import { Error } from "../authHooks/useLogin";


interface assignRequest {
    internId : number,
    supervisorId : number
}



const useSupervisorAssigning = () => {

    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const toast = useToast();
    
    return useMutation({
        mutationFn : ({supervisorId, internId} : assignRequest) =>
            axios
                .put("http://localhost:8080/api/v1/supervisor/assign/" + supervisorId.toString() + "/to/" + internId.toString()),

            onSuccess : () =>{
                toast({
                    title: 'Supervisor assigned successfully',
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

export default useSupervisorAssigning;