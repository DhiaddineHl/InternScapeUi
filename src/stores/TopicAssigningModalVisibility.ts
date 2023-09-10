
import { create } from "zustand"

interface TopicAssigningModalVisibility {
    isAssignOpen : boolean,
    onOpenAssign : () => void
    onCloseAssign : () => void
}

const TopicAssigningModalVisibility = create<TopicAssigningModalVisibility>(set =>({
    isAssignOpen : false,
    onOpenAssign : () => set(() => ({isAssignOpen : true})),
    onCloseAssign : () => set(() => ({isAssignOpen : false}))
}))

export default TopicAssigningModalVisibility;