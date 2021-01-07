import { reactive } from 'vue'

export interface IState {
    code: string
    token: string
    user: any
}

export const State: IState = {
    code: '',
    token: '',
    user: {}
}

export function createState() {
    return reactive(State)
}
