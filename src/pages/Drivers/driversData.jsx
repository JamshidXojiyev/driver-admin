import { Status } from "./drivers.s";
export const DriversData = {
  header: [
    "First name",
    "Last Name",
    "Birthdate",
    "State",
    "Phone Number",
    "Status",
  ],
  body: [
    {
      first_name: "Sierra",
      last_name: "Ferguson",
      birthdate: "9.5.1990",
      state: "Created",
      phone: "+998 (99) 436-46-15",
      status: <Status>some time ago</Status>,
    },
    {
      first_name: "Nathaniel",
      last_name: "Lawrence",
      birthdate: "6.5.1973",
      state: "Active",
      phone: "+998 (99) 436-46-15",
      status: <Status>1 months ago</Status>,
    },
    {
      first_name: "Alberto",
      last_name: "Daniels",
      birthdate: "11.5.2001",
      state: "Active",
      phone: "+998 (99) 436-46-15",
      status: <Status>3 days ago</Status>,
    },
    {
      first_name: "Mary",
      last_name: "Mills",
      birthdate: "11.9.1995",
      state: "Created",
      phone: "+998 (99) 436-46-15",
      status: <Status>3 days ago</Status>,
    },
    {
      first_name: "Bessie",
      last_name: "Spencer",
      birthdate: "8.2.1992",
      state: " Active",
      phone: "+998 (99) 436-46-15",
      status: <Status>2 weeks ago</Status>,
    },
  ],
  order: ["first_name", "last_name", "birthdate", "state", "phone", "status"],
};
