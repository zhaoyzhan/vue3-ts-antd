interface Istate {
  admin: boolean,
  role: any[],
  ability: any[],
}

const state = (): Istate => ({
  admin: false,
  role: [],
  ability: [],
})
const getters = {
  admin: (state: Istate) => state.admin,
  role: (state: Istate) => state.role,
  ability: (state: Istate) => state.ability,
}
const mutations = {
  setFull(state: Istate, admin: boolean) {
    state.admin = admin
  },
  setRole(state: Istate, role: any[]) {
    state.role = role
  },
  setAbility(state: Istate, ability: any[]) {
    state.ability = ability
  },
}
const actions = {
  setFull({ commit }: {commit: any}, admin: boolean) {
    commit('setFull', admin)
  },
  setRole({ commit }: {commit: any}, role: any[]) {
    commit('setRole', role)
  },
  setAbility({ commit }: {commit: any}, ability: any[]) {
    commit('setAbility', ability)
  },
}
export default { state, getters, mutations, actions }
