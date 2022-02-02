import format from "date-fns/format"

const formatDate = ({value}) => {return format(new Date(value), 'dd/MM/yyyy')}

export const COLUMNS = [
    {
        Header:'First Name',
        accessor: 'firstName'
    },
    {
        Header:'Last Name',
        accessor: 'lastName'
    },
    {
        Header:'Start Date',
        accessor: 'startDate',
        Cell: formatDate
    },
    {
        Header:'Department',
        accessor: 'department'
    },
    {
        Header:'Date of Birth',
        accessor: 'birthDate',
        Cell: formatDate
    },
    {
        Header:'Street',
        accessor: 'street'
    },
    {
        Header:'City',
        accessor: 'city'
    },
    {
        Header:'State',
        accessor: 'state'
    },
    {
        Header:'Zip Code',
        accessor: 'zipCode'
    },
]