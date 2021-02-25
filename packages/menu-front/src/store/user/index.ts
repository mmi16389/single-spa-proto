import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { RootState, UserState } from '../types';

const namespaced = true;

export const state: UserState = {
    user: undefined
};

export const getters:  GetterTree<UserState, RootState> ={
    getUser:(state)=>{
        return state.user;
    }
};

export const actions: ActionTree<UserState, RootState>  ={
    addUser({ commit }, user: UserState ) {
		commit('ADD_USER', user);
	}
};

export const mutations: MutationTree<UserState> = {
    ADD_USER(state: UserState, user: UserState) {
		state.user = user;
	}
};

export const userStore: Module<UserState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};