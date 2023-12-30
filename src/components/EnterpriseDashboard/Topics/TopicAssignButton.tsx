import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, Select, useDisclosure } from '@chakra-ui/react';
import useInterns from '../../../hooks/enterpriseAppHooks/useInterns';
import {FieldValues, useForm } from 'react-hook-form';
import useTopicAssigning from '../../../hooks/enterpriseAppHooks/useTopicAssigning';




const TopicAssignButton = ({topicId, isAvailable} : {topicId : number, isAvailable : boolean}) => {

    const {data : interns} = useInterns();
    const assignTopic = useTopicAssigning();

    const {register, handleSubmit} = useForm();

    const {isOpen, onClose, onOpen} = useDisclosure();

    const onAssign = (data : FieldValues) => {
      assignTopic.mutate({
          internId : data.internId,
          topicId : topicId
      })
      if(assignTopic.isSuccess) {
          onClose();
    }
  }
  return (
    <>
    <Button 
      flex={1} 
      variant={'outline'} 
      colorScheme='green' 
      fontSize={'sm'} 
      _focus={{bg: 'gray.200'}} 
      onClick={onOpen}
      isDisabled={!isAvailable}
      >
        Assign
    </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select an intern to assign this topic to</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            
          </ModalBody>
            <form onSubmit={handleSubmit(onAssign)}>
                <Select {...register("internId")} placeholder='Select an intern' maxW={'sm'} ml={7}>
                    {interns?.map((intern) => (
                        <option key={intern.id} value={intern.id} disabled={!(intern.topicTitle === "No topic assigned")}>{intern.name}</option>
                    ))}
                </Select>
          <ModalFooter>
            <Button type='submit' colorScheme='blue' mr={3} isLoading={assignTopic.isLoading}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
            </form>
        </ModalContent>
      </Modal>
    </>
  )
}


export default TopicAssignButton