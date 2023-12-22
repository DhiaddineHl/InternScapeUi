import { create } from "zustand";

interface InternIdSetter {
    userId : number;
    userName : string;
    userType : string;
    setUserId : (newUserId : number) => void;
    setUserName : (newUserName : string) => void;
    setUserType : (newUserType : string) => void
    clear : () => void
}

const UserCredentialsSetter = create<InternIdSetter>(set => ({
    userId : 0,
    userName : "",
    userType : "",
    setUserId : newUserId => (set(() => ({userId : newUserId}))),
    setUserType : newUserType => (set(() => ({userType : newUserType}))),
    setUserName : newUserName => (set(() => ({userName : newUserName}))),
    clear : () => (set (() => ({userId : 0, userName : "", userType : ""})))
}))

export default UserCredentialsSetter;