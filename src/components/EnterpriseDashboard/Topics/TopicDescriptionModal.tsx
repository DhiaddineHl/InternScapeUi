import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import TopicDescriptionModalStore from '../../../stores/TopicDescriptionModalStore';



const TopicDescriptionModal = () => {

    const {isOpen, onClose, content} = TopicDescriptionModalStore();

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