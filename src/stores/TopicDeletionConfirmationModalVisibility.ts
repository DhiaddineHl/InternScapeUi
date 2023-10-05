
import { create } from "zustand"

interface TopicDeletionConfiramationModalVisibilityProps {
    isDeleteTopicOpen : boolean,
    onOpenForTopicDelete : () => void,
    onCloseForTopicDelete : () => void

}

const TopicDeletionConfiramationModalVisibility = create<TopicDeletionConfiramationModalVisibilityProps>(set =>({
    isDeleteTopicOpen : false,
    onOpenForTopicDelete : () => set(() => ({isDeleteTopicOpen : true})),
    onCloseForTopicDelete : () => set(() => ({isDeleteTopicOpen : false}))
}))

export default TopicDeletionConfiramationModalVisibility;