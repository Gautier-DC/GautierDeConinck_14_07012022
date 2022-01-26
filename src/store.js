import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const store = (set) => ({
    employees:[],
    addEmployee: (employee) => set(state => ({employees: [...state.employees, employee]}))
})

const useStore = create(devtools(persist(store, {name: 'employee_settings'})));

export default useStore;