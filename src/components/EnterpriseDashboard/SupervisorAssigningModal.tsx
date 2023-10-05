import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, Select } from '@chakra-ui/react'
import useInterns from '../../hooks/enterpriseAppHooks/useInterns';
import {FieldValues, useForm } from 'react-hook-form';
import SupervisorAssigningModalVisibility from '../../stores/SupervisorAssigningModalVisibility';
import SupervisorIdSetter from '../../stores/SupervisorIdSetter';
import useSupervisorAssigning from '../../hooks/enterpriseAppHooks/useSupervisorAssigning';

const SupervisorAssigningModal = () => {

    const {isOpenForSupervisor,onOpenForSupervisor,onCloseForSupervisor} = SupervisorAssigningModalVisibility();
    const {data : interns, error, isLoading} = useInterns();
    const {register, handleSubmit} = useForm();
    const assignSupervisor = useSupervisorAssigning();

    // const {setId, internId} = InternIdSetter();
    const supervisorId = SupervisorIdSetter(s => s.supervisorId);

    const onAssign = (data : FieldValues) => {

    assignSupervisor.mutate({
        internId : data.internId,
        supervisorId : supervisorId
    })

    }
  return (
    <>
      <Modal
        isOpen={isOpenForSupervisor}
        onClose={onCloseForSupervisor}
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
            <Button onClick={onCloseForSupervisor}>Cancel</Button>
          </ModalFooter>
            </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SupervisorAssigningModal;