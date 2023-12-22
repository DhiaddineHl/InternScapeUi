import { useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { useNavigate } from "react-router-dom";
import { Error, Response } from "./useLogin";
import { useToast } from "@chakra-ui/react";



export interface Intern {
    name : string,
    email : string,
    enterpriseEmail : string,
    speciality : string,
    phone : string
    password : string
  }


const useRegisterIntern = () => {

    const navigate = useNavigate();
    const toast = useToast();

    return useMutation({
        mutationFn : (intern : Intern ) =>
          axios
          .post<Response>("http://localhost:8080/api/v1/auth/register/intern", intern)
          .then(res =>{ 
            console.log(res.data);
            
            localStorage.setItem('token', res.data.accessToken)
            localStorage.setItem('role', res.data.userType)
            localStorage.setItem('userId', res.data.userId.toString())
            localStorage.setItem('userName', res.data.userName)

          }),
          onSuccess : () =>{
            toast({
                title: 'Registred successfully',
                description: "Welcome to InternScape Pro",
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
export default useRegisterIntern;