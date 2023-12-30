import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Box, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import useTopicDelete from '../../../hooks/enterpriseAppHooks/useTopicDelete'


const TopicDeleteButton = ({topicId} : {topicId : number}) => {

    const finalRef = React.useRef(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const deleteTopic = useTopicDelete(topicId);


  return (
    <>
      <Button colorScheme='red' onClick={onOpen}>
      <DeleteIcon />
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Warning</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Are you sure you want to delete this topic ?</p>
          </ModalBody>
          <ModalFooter gap={3}>
            <Button colorScheme='red'
            onClick={() => {
              console.log(topicId);
              deleteTopic.mutate();
              onClose()
            }}
            >
              Delete
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TopicDeleteButton