import {Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import useTopicCreation from '../../../hooks/enterpriseAppHooks/useTopicCreation';

const TopicCreationButton = () => {

    const createTopic = useTopicCreation();

    const {handleSubmit, register} = useForm();

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const { isOpen, onOpen, onClose } = useDisclosure()


    const onCreate = (data : FieldValues) => {
        console.log(data);
        createTopic.mutate({
            title : data.title,
            description : data.description,
            duration : data.duration,
            field : data.field
        })
        if(createTopic.isSuccess) {
          onClose();
        }
    }

  return (
    <>
     <Button
        onClick={onOpen}
        flex={1}
        variant={'outline'}
        colorScheme='blue'
        fontSize={'m'}
        _focus={{
          bg: 'blue.400',
          color : 'white'
          }}>
          Add topic
      </Button>         
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
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
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
      </form>
    </Modal>
  </>
  )
}

export default TopicCreationButton