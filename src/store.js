import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { mockedEmployees } from './mockedEmployees';

const initialStateEmployees = mockedEmployees ;

const store = (set) => ({
    employees:initialStateEmployees,
    addEmployee: (employee) => set(state => ({employees: [...state.employees, employee]}))
})

const useStore = create(devtools(persist(store, {name: 'employee_settings'})));

export default useStore;