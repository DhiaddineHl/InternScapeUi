import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { useNavigate } from "react-router-dom";
import { Error } from "./useLogin";



interface Enterprsie {
    name : string,
    email : string,
    field : string,
    phone : string
    password : string
  }

  export interface Response {
    accessToken : string,
    refreshToken : string,
    userType : string,
    userId : number,
    userName : string
  }
  

const useRegisterEnterprise = () => {

    const navigate = useNavigate();
    const toast = useToast();

    return useMutation({
        mutationFn : (enterprise :Enterprsie ) =>
          axios
          .post<Response>("/api/v1/auth/register/enterprise", enterprise)
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

export default useRegisterEnterprise;