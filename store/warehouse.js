const defaultState = () => ({
    tempWarehouse: [],
    warehouses: [],
    filteredWarehouses: [],
    filter: {
        search: '',
        city: '',
        spaceAvailable: ''
    }
});

export default {
    state: defaultState(),
    getters: {
        WAREHOUSE: state => state.tempWarehouse,
    },

    mutations: {
        SAVE_TEMP_WAREHOUSE_MUTATION(state, payload) {
            state.tempWarehouse = payload
        },

        SAVE_WAREHOUSES_MUTATION(state, payload) {
            state.warehouses = payload
        }
    },

    actions: {
        async filterSpaceAvailable({ commit }, space) {
            await commit('setSpace', space)
            dispatch('filteredWarehouses')
        },

        async filterCity({ commit, dispatch }, city) {
            await commit('setCity', city)
            dispatch('filteredWarehouses')
        },

        async filterSearch({ commit, dispatch }, search) {
            await commit('setFilterSearch', search)
            dispatch('filteredWarehouses')
        },
    }
}