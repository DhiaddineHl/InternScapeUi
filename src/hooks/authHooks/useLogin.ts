import { useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react';



interface Credentials {
    email : string,
    password : string
  }
  
  export interface Response {
    accessToken : string,
    refreshToken : string,
    userType : string,
    userId : number,
    userName : string
  }

  interface Error {
    errorMessage : string,
    codeStatus : number
  }

const useLogin = () => {

    const navigate = useNavigate();
    const toast = useToast();

    return useMutation({
        mutationFn : (creadentials : Credentials) =>
          axios
          .post<Response>("http://localhost:8080/api/v1/auth/authenticate", creadentials)
          .then(res =>{ 
            console.log(res.data);
            
            localStorage.setItem('token', res.data.accessToken)
            localStorage.setItem('role', res.data.userType)
            localStorage.setItem('userId', res.data.userId.toString())
            localStorage.setItem('userName', res.data.userName)

          }),
          onSuccess : () =>{
            toast({
                title: 'Authenticated successfully',
                description: "Welcome back to InternScape Pro",
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
              navigate("/Home")
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

export default useLogin;