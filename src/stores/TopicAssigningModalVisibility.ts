
import { create } from "zustand"

interface TopicAssigningModalVisibilityProps {
    isOpenForTopic : boolean,
    onOpenForTopic : () => void,
    onCloseForTopic : () => void

}

const TopicAssigningModalVisibility = create<TopicAssigningModalVisibilityProps>(set =>({
    isOpenForTopic : false,
    onOpenForTopic : () => set(() => ({isOpenForTopic : true})),
    onCloseForTopic : () => set(() => ({isOpenForTopic : false}))
}))

export default TopicAssigningModalVisibility;