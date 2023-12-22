import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import React from 'react'
import TopicModalVisibility from '../../stores/TopicModalVisibility'
import useTopicDescription from '../../hooks/enterpriseAppHooks/useTopicDescription';
import TopicIdSetter from '../../stores/TopicIdSetter';
import TopicDescriptionModalStore from '../../stores/TopicDescriptionModalStore';



const TopicDescriptionModal = () => {

    const {isOpen, onClose, content} = TopicDescriptionModalStore();
    // const getDescription = useTopicDescription(TopicIdSetter(s=>s.topicId));

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Topic description</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        {content}
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}

export default TopicDescriptionModal