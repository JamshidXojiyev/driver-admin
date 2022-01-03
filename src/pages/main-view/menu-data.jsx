import { ReactComponent as DashboardIcon } from "../../assats/menu-icons/Dashboard.svg";
import { ReactComponent as OrdersIcon } from "../../assats/menu-icons/Orders.svg";
import { ReactComponent as RidesIcon } from "../../assats/menu-icons/Rides.svg";
import { ReactComponent as ClientsIcon } from "../../assats/menu-icons/Clients.svg";
import { ReactComponent as DriversIcon } from "../../assats/menu-icons/Drivers.svg";
import { ReactComponent as ShiftIcon } from "../../assats/menu-icons/Shift.svg";
import { ReactComponent as LiveMapIcon } from "../../assats/menu-icons/LiveMap.svg";
import { ReactComponent as CarClassesIcon } from "../../assats/menu-icons/CarClasses.svg";
import { ReactComponent as BranchesIcon } from "../../assats/menu-icons/Branches.svg";
import { ReactComponent as ModeratorsIcon } from "../../assats/menu-icons/Moderators.svg";

export const MenuData = [
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
    url: "/dashboard",
  },
  {
    icon: <OrdersIcon />,
    name: "Orders",
    url: "/orders",
  },
  {
    icon: <RidesIcon />,
    name: "Rides",
    url: "/rides",
  },
  {
    icon: <ClientsIcon />,
    name: "Clients",
    url: "/clients",
  },
  {
    icon: <DriversIcon />,
    name: "Drivers",
    url: "/drivers",
  },
  {
    icon: <ShiftIcon />,
    name: "Shift",
    url: "/shift",
  },
  {
    icon: <LiveMapIcon />,
    name: "LiveMap",
    url: "/live-map",
  },
  {
    icon: <CarClassesIcon />,
    name: "CarClasses",
    url: "/car-classes",
  },
  {
    icon: <BranchesIcon />,
    name: "Branches",
    url: "/branches",
  },
  {
    icon: <ModeratorsIcon />,
    name: "Moderators",
    url: "/moderators",
  },
];
