import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Box, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import TopicDeletionConfiramationModalVisibility from '../../stores/TopicDeletionConfirmationModalVisibility'

const TopicDeleteConfiramtionModal = () => {

    const finalRef = React.useRef(null)

    const {isDeleteTopicOpen, onCloseForTopicDelete, onOpenForTopicDelete} = TopicDeletionConfiramationModalVisibility();

  return (
    <>
      <Modal finalFocusRef={finalRef} isOpen={isDeleteTopicOpen} onClose={onCloseForTopicDelete}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Warning</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Are you sure you want to delete this topic ?</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onCloseForTopicDelete}>
              Delete
            </Button>
            <Button onClick={onCloseForTopicDelete} variant='ghost'>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TopicDeleteConfiramtionModal