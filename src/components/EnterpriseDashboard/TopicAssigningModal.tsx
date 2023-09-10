import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, Select } from '@chakra-ui/react'
import TopicAssigningModalVisibility from '../../stores/TopicAssigningModalVisibility'
import useInterns from '../../hooks/enterpriseAppHooks/useInterns';
import InternIdSetter from '../../stores/InternIdSetter';
import {FieldValues, useForm } from 'react-hook-form';
import { useState } from 'react';
import TopicIdSetter from '../../stores/TopicIdSetter';
import useTopicAssigning from '../../hooks/enterpriseAppHooks/useTopicAssigning';

const TopicAssigningModal = () => {

    const {isAssignOpen, onOpenAssign, onCloseAssign} = TopicAssigningModalVisibility();
    const {data : interns, error, isLoading} = useInterns();
    const {register, handleSubmit} = useForm();
    const assignTopic = useTopicAssigning();

    // const {setId, internId} = InternIdSetter();
    const topicId = TopicIdSetter(s => s.topicId);

    const onAssign = (data : FieldValues) => {

    assignTopic.mutate({
        internId : data.internId,
        topicId : topicId
    })

    }
  return (
    <>
      <Modal
        isOpen={isAssignOpen}
        onClose={onCloseAssign}
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
                        <option key={intern.id} value={intern.id}>{intern.name}</option>
                    ))}
                </Select>
          <ModalFooter>
            <Button type='submit' colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onCloseAssign}>Cancel</Button>
          </ModalFooter>
            </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default TopicAssigningModal