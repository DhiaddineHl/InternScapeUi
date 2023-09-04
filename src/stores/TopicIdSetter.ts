import { create } from "zustand";

interface TopicIdSetter {
    topicId : number;
    setId : (newTopicId : number) => void
}

const TopicIdSetter = create<TopicIdSetter>(set => ({
    topicId : 0,
    setId : newTopicId => (set(() => ({topicId : newTopicId})))
}))

export default TopicIdSetter;