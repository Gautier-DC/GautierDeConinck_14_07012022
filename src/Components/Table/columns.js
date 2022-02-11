export const COLUMNS = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Start Date",
    //Format date in order to sort it correctly and return something in case of empty field to avoid crash
    accessor: row => new Date(row.startDate),
    sortType: 'datetime',
    Cell: ({ cell: { value }}) => value.toLocaleDateString(),
  },
  {
    Header: "Department",
    accessor: "department",
  },
  {
    Header: "Date of Birth",
    //Format date in order to sort it correctly and return something in case of empty field to avoid crash
    accessor: row => new Date(row.birthDate),
    sortType: 'datetime',
    Cell: ({ cell: { value }}) => value.toLocaleDateString(),
  },
  {
    Header: "Street",
    accessor: "street",
  },
  {
    Header: "City",
    accessor: "city",
  },
  {
    Header: "State",
    accessor: "state",
  },
  {
    Header: "Zip Code",
    accessor: "zipCode",
  },
];
