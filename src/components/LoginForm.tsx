import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/authHooks/useLogin';

export default function LoginForm() {


    const {register, handleSubmit} = useForm();

    const loginUser = useLogin();

    const onLogin =(data : FieldValues) => {
        console.log(data);
        loginUser.mutate({

            email : data.email,
            password : data.password
        })
        
        
    }


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={6} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <form onSubmit={handleSubmit(onLogin)} >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" {...register("email")} />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" {...register("password")}/>
                </FormControl>
                <Stack spacing={6}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'center'}
                    justify={'center'}>
                    <Text color={'blue.400'}>Forgot password?</Text>
                  </Stack>
                  <Button
                  type='submit'
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                      
                    }}>
                    Sign in
                  </Button>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'center'}
                    justify={'center'}>
                    <Text>Not a member ?</Text>
                    <Link to="/register" ><Text color={'blue.400'} >Register to the platform</Text></Link>
                  </Stack>
                </Stack>
              </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}
