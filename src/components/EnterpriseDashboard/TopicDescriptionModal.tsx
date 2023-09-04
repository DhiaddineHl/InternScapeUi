import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import React from 'react'
import TopicModalVisibility from '../../stores/TopicModalVisibility'
import useTopicDescription from '../../hooks/enterpriseAppHooks/useTopicDescription';
import TopicIdSetter from '../../stores/TopicIdSetter';



const TopicDescriptionModal = () => {

    const {isOpen, onOpen, onClose} = TopicModalVisibility();
    const getDescription = useTopicDescription(TopicIdSetter(s=>s.topicId));

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Topic description</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        {getDescription.data}
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}

export default TopicDescriptionModal