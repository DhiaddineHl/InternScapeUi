import { create } from "zustand"

interface DescriptionModalProps {
    topicId : number
    content : string
    isOpen : boolean
    setContent : (newContent : string) => void
    onOpen : () => void
    onClose : () => void
}


const TopicDescriptionModalStore = create<DescriptionModalProps>(set => ({
    topicId : 0,
    content : "",
    isOpen : false,
    setContent : newContent => (set(() => ({content : newContent}))),
    onOpen : () => (set(() => ({isOpen : true}))),
    onClose : () => (set(() => ({isOpen : false})))
}))

export default TopicDescriptionModalStore;