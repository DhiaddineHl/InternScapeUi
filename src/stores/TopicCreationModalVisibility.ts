
import { create } from "zustand"

interface TopicCreationModalVisibilityProps {
    isTopicCreationOpen : boolean,
    onOpenTopicCreation : () => void,
    onCloseTopicCration : () => void

}

const TopicCreationModalVisibility = create<TopicCreationModalVisibilityProps>(set =>({
    isTopicCreationOpen : false,
    onOpenTopicCreation : () => set(() => ({isTopicCreationOpen : true})),
    onCloseTopicCration : () => set(() => ({isTopicCreationOpen : false}))
}))

export default TopicCreationModalVisibility;