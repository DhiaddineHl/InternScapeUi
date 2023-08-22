import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import EnterpriseRegisterForm from './EnterpriseRegisterForm'
import SupervisorRegisterForm from './SupervisorRegisterForm'
import InternRegisterForm from './InternRegisterForm'



const RegisterPage = () => {
  return (
    <Tabs variant='soft-rounded' colorScheme='blue' margin={3}>
    <TabList>
      <Tab>Enterprise</Tab>
      <Tab>Supervisor</Tab>
      <Tab>Intern</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <EnterpriseRegisterForm></EnterpriseRegisterForm>
      </TabPanel>
      <TabPanel>
        <SupervisorRegisterForm />
      </TabPanel>
      <TabPanel>
        <InternRegisterForm />
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
}

export default RegisterPage