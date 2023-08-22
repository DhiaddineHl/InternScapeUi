import { BoxProps, useColorModeValue, Flex, CloseButton, Box, Text } from "@chakra-ui/react"
import NavItem from "./NavItem"
import { FaUserTie, FaUser } from "react-icons/fa6"
import { FiHome, FiBook, FiSettings } from "react-icons/fi"
import { IconType } from "react-icons"
import { useNavigate } from "react-router-dom"


interface SidebarProps extends BoxProps {
    onClose: () => void
  }

  interface LinkItemProps {
    name: string
    icon: IconType
  }



  const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome },
    { name: 'Topics', icon: FiBook },
    { name: 'Supervisors', icon: FaUserTie },
    { name: 'Interns', icon: FaUser },
    { name: 'Settings', icon: FiSettings },
  ]
  


const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {


  const navigate = useNavigate();

    return (
      <Box
        transition="3s ease"
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Logo
          </Text>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} onClick={() => navigate(`${'/' + link.name}`)}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    )
  }


  export default SidebarContent