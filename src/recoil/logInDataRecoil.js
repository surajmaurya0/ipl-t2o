import {atom, selector} from 'recoil'
export const logInState = atom({
    key:'logInState',
    default:{
        email:'admin@123',
        password:'admin@123'
    }
})
