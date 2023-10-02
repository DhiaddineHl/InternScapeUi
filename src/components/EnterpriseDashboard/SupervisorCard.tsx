
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Divider,
  Grid,
  GridItem,
  Spinner,
} from '@chakra-ui/react'
import useSupervisors from '../../hooks/enterpriseAppHooks/useSupervisors';
import SupervisorAssigningModalVisibility from '../../stores/SupervisorAssigningModalVisibility';
import SupervisorAssigningModal from './SupervisorAssigningModal';
import SuperviosrIdSetter from '../../stores/SupervisorIdSetter';

export default function SupervisorCard() {

  const {data : supervisors, error, isLoading} = useSupervisors();
  const {isOpenForSupervisor,onOpenForSupervisor,onCloseForSupervisor} = SupervisorAssigningModalVisibility();
  const {setId, supervisorId} = SuperviosrIdSetter();

  return (
    <>
    {isLoading && <Spinner />}
    {isOpenForSupervisor && <SupervisorAssigningModal />}
    <Grid templateColumns='repeat(3, 1fr)' gap={2} >
    {supervisors?.map((supervisor) => (
    <GridItem
    key={supervisor.id}
    >
      <Center py={3}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src='https://bit.ly/broken-link'
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {supervisor.name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            {supervisor.email}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
            m={3}>
            {supervisor.speciality}
          </Text>
          <Divider />
          <Heading fontSize={'l'} fontFamily={'body'} m={3}>
            Topics : {supervisor.topics.length == 0 ? "No topics assigned" : supervisor.topics}
          </Heading>
          <Divider />
          <Heading fontSize={'l'} fontFamily={'body'} m={3}>
            Interns : {supervisor.interns}
          </Heading>
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              variant={'outline'}
              colorScheme='green'
              fontSize={'sm'}
              _focus={{
                bg: 'gray.200',
              }}>
              Contact
            </Button>
            <Button
            onClick={() => {
              setId(supervisor.id);
              onOpenForSupervisor()
              console.log(supervisorId);
              
            }}
              flex={1}
              variant={'outline'}
              colorScheme='blue'
              fontSize={'sm'}
              _focus={{
                bg: 'gray.200',
              }}>
              Assign
            </Button>
          </Stack>
        </Box>
      </Center>
    </GridItem>
    ))}

    </Grid>
    </>
  )
}
