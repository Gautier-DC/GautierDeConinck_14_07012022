import create from 'zustand'

const useStore = create(set => ({
    employees:[],
    addEmployee: () => set(state => ({}))
}))