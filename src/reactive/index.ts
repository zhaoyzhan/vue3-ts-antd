import { reactive, provide, inject, readonly } from 'vue';

export interface stetaP {
    counter: number,
    age: number
}

export const stateSymbol = Symbol('state');
export const createState = (): {
    increment: () => void,
    state: stetaP
} => {
    const state = reactive<stetaP>({ counter: 0, age: 12 });
    const increment = (): void => {state.counter++};

    return { increment, state: readonly(state) };
}

export const useState = (): any => inject(stateSymbol);
// export const provideState = () => provide(
//     stateSymbol, 
//     createState()
// );