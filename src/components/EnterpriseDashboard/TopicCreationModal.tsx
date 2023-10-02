import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from '@chakra-ui/react'
import React from 'react'
import TopicCreationModalVisibility from '../../stores/TopicCreationModalVisibility'
import { FieldValues, useForm } from 'react-hook-form';
import useTopicCreation from '../../hooks/enterpriseAppHooks/useTopicCreation';

const TopicCreationModal = () => {


    const {isTopicCreationOpen, onCloseTopicCration, onOpenTopicCreation} = TopicCreationModalVisibility();
    const createTopic = useTopicCreation();
    const {handleSubmit, register} = useForm();
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const onCreate = (data : FieldValues) => {

        console.log(data);
        

        createTopic.mutate({
            title : data.title,
            description : data.description,
            duration : data.duration,
            field : data.field
        })
    }

  return (
    <>
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isTopicCreationOpen}
      onClose={onCloseTopicCration}
    >
      <ModalOverlay />
      <form onSubmit={handleSubmit(onCreate)}>
          <ModalContent>
            <ModalHeader>Create a new Internship Topic</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input {...register("title")} placeholder='title' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Input {...register("description")} placeholder='description' />
              </FormControl>
          
              <FormControl mt={4}>
                <FormLabel>Duration</FormLabel>
                <Input {...register("duration")} placeholder='duration' />
              </FormControl>
          
              <FormControl mt={4}>
                <FormLabel>FIeld</FormLabel>
                <Input {...register("field")} placeholder='field' />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button isLoading={createTopic.isLoading} type='submit' colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onCloseTopicCration}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
      </form>
    </Modal>
  </>
  )
}

export default TopicCreationModal