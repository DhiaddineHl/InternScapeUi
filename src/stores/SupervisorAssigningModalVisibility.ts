
import { create } from "zustand"

interface SupervisorAssigningModalVisibilityProps {
    isOpenForSupervisor : boolean,
    onOpenForSupervisor : () => void,
    onCloseForSupervisor : () => void

}

const SupervisorAssigningModalVisibility = create<SupervisorAssigningModalVisibilityProps>(set =>({
    isOpenForSupervisor : false,
    onOpenForSupervisor : () => set(() => ({isOpenForSupervisor : true})),
    onCloseForSupervisor : () => set(() => ({isOpenForSupervisor : false}))
}))

export default SupervisorAssigningModalVisibility;