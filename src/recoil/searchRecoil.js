import { atom, selector } from "recoil";
import { playerDataState } from "./playerDataRecoil";

export const searchDataText = atom({
    key:'searchDataText',
    default:''
})

export const searchResultState = selector({
    key:'searchResultState',
    get:({get}) => {
        const searchText = get(searchDataText)
        const playerData = get(playerDataState)
        let searchResult = []
        searchResult = playerData.filter((player) => player.playerName.toLowerCase().includes(searchText.toLowerCase()))
        return searchResult
    }
})