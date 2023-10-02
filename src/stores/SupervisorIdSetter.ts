import { create } from "zustand";

interface SupervisorIdSetterProps {
    supervisorId : number;
    setId : (newSupervisorId : number) => void
}

const SuperviosrIdSetter = create<SupervisorIdSetterProps>(set => ({
    supervisorId : 0,
    setId : newSupervisorId => (set(() => ({supervisorId : newSupervisorId})))
}));

export default SuperviosrIdSetter;