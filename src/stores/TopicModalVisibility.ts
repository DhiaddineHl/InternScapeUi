
import { create } from "zustand"

interface TopicModalVisibility {
    isOpen : boolean,
    onOpen : () => void
    onClose : () => void
}

const TopicModalVisibility = create<TopicModalVisibility>(set =>({
    isOpen : false,
    onOpen : () => set(() => ({isOpen : true})),
    onClose : () => set(() => ({isOpen : false}))
}))

export default TopicModalVisibility;