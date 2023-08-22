
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { FieldValues, useForm } from 'react-hook-form'

export default function EnterpriseRegisterForm() {

  const [showPassword, setShowPassword] = useState(false)
  const {register, handleSubmit} = useForm();

  const onRegister = (data : FieldValues) => {
    console.log(data);
    
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={6} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <form onSubmit={handleSubmit(onRegister)}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Enterprise Name</FormLabel>
                      <Input type="text" {...register("name")} />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="field" isRequired>
                      <FormLabel>Field</FormLabel>
                      <Input type="text" {...register("field")} />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" {...register("email")} />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} {...register("password")} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() => setShowPassword((showPassword) => !showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl id="phone" isRequired>
                  <FormLabel>Enterprise Phone</FormLabel>
                  <Input type="phone" {...register("phone")} />
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                  type='submit'
                    loadingText="Submitting"
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    Sign up
                  </Button>
                </Stack>
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'center'}
                    justify={'center'}>
                    <Text>Already a member ?</Text>
                    <Link to="/" ><Text color={'blue.400'} >Login</Text></Link>
                  </Stack>
              </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}
