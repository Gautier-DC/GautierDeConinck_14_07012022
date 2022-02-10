import format from "date-fns/format";

//Format date to have a better UI
const formatDate = ({ value }) => {
  if (value === "0000/00/00") {
    return "00/00/0000";
  }
  return format(new Date(value), "dd/MM/yyyy");
};

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
    accessor: (row) => {
        if (row.startDate === undefined || null) {
            return "0000/00/00";
          }  
      return format(new Date(row.startDate), "yyyy/MM/dd");
    },
    Cell: formatDate,
  },
  {
    Header: "Department",
    accessor: "department",
  },
  {
    Header: "Date of Birth",
    //Format date in order to sort it correctly and return something in case of empty field to avoid crash
    accessor: (row) => {
      if (row.birthDate === undefined || null) {
        return "0000/00/00";
      }
      return format(new Date(row.birthDate), "yyyy/MM/dd");
    },
    Cell: formatDate,
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
