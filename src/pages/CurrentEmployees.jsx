import React from 'react'
import HeaderEmployeeList from '../Components/HeaderEmployeeList'
import EmployeesTable from '../Components/Table/EmployeesTable'

export default function CurrentEmployees() {
    return (
        <>
            <HeaderEmployeeList/>
            <main>
                <EmployeesTable/>
            </main>
        </>
    )
}
