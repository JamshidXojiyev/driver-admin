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
import { ReactComponent as NewsIcon } from "../../assats/menu-icons/News.svg";
import { ReactComponent as PolygonIcon } from "../../assats/menu-icons/Polygon.svg";

export const MenuData = [
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
    url: "/dashboard",
    id: "reports",
  },
  {
    icon: <OrdersIcon />,
    name: "Orders",
    url: "/orders",
    id: "orders",
  },
  {
    icon: <RidesIcon />,
    name: "Rides",
    url: "/rides",
    id: "rides",
  },
  {
    icon: <ClientsIcon />,
    name: "Clients",
    url: "/clients",
    id: "riders",
  },
  {
    icon: <DriversIcon />,
    name: "Drivers",
    url: "/drivers",
    id: "drivers",
  },
  {
    icon: <ShiftIcon />,
    name: "Shift",
    url: "/shift",
    id: "shift",
  },
  {
    icon: <LiveMapIcon />,
    name: "LiveMap",
    url: "/live-map",
    id: "live_map",
  },
  {
    icon: <CarClassesIcon />,
    name: "CarClasses",
    url: "/car-classes",
    id: "car_classes",
  },
  {
    icon: <PolygonIcon />,
    name: "Polygon",
    url: "/polygon",
    id: "places",
  },
  {
    icon: <BranchesIcon />,
    name: "Branches",
    url: "/branches",
    id: "branches",
  },
  {
    icon: <ModeratorsIcon />,
    name: "Moderators",
    url: "/moderators",
    id: "moderators",
  },
  {
    icon: <NewsIcon />,
    name: "News",
    url: "/news",
    id: "news",
  },
];
