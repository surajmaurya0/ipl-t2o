import {atom} from 'recoil'
export const menuState = atom({
    key:'menuState',
    default:false
})
export const logInMenu = atom({
    key:'logInMenu',
    default:''
})