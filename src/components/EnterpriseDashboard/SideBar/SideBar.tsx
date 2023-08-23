import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Grid,
  GridItem,
  SimpleGrid,
  Button
} from '@chakra-ui/react'
import {GrAdd} from 'react-icons/gr'
import SidebarContent from './SideBarContetnt';
import MobileNav from './MobileNav';
import SupervisorCard from '../SupervisorCard';
import InternCard from '../InternCard';
import { ReactNode } from 'react';


interface SideBarProps {
  children : ReactNode
}




const SidebarWithHeader = ({children} : SideBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

export default SidebarWithHeader
