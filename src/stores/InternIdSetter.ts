import { create } from "zustand";

interface InternIdSetter {
    internId : number;
    setId : (newInternId : number) => void
}

const InternIdSetter = create<InternIdSetter>(set => ({
    internId : 0,
    setId : newInternId => (set(() => ({internId : newInternId})))
}))

export default InternIdSetter;