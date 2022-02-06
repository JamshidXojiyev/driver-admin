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
import { ReactComponent as PlacesIcon } from "../../assats/menu-icons/Places.svg";
import Dashboard from "../Dashboard/dashboard";
import Clients from "../Clients/clients";
import Drivers from "../Drivers/drivers";
import Orders from "../Orders/orders";
import Rides from "../Rides/rides";
import Shift from "../Shift/shift";
import CarClasses from "../Car-Classes/car-classes";
import Moderators from "../Moderators/moderators";
import News from "../News/news";
import LiveMap from "../Live-Map/live-map";
import MyPolygon from "../Polygon/my-polygon";
import Branches from "../Branches/branches";

export const MenuData = [
  {
    icon: <DashboardIcon />,
    name: "Dashboard",
    url: "/dashboard",
    id: "reports",
    component: Dashboard,
  },
  {
    icon: <OrdersIcon />,
    name: "Orders",
    url: "/orders",
    id: "orders",
    component: Orders,
  },
  {
    icon: <RidesIcon />,
    name: "Rides",
    url: "/rides",
    id: "rides",
    component: Rides,
  },
  {
    icon: <ClientsIcon />,
    name: "Clients",
    url: "/clients",
    id: "riders",
    component: Clients,
  },
  {
    icon: <DriversIcon />,
    name: "Drivers",
    url: "/drivers",
    id: "drivers",
    component: Drivers,
  },
  {
    icon: <ShiftIcon />,
    name: "Shift",
    url: "/shift",
    id: "shift",
    component: Shift,
  },
  {
    icon: <LiveMapIcon />,
    name: "LiveMap",
    url: "/live-map",
    id: "live_map",
    component: LiveMap,
  },
  {
    icon: <CarClassesIcon />,
    name: "CarClasses",
    url: "/car-classes",
    id: "car_classes",
    component: CarClasses,
  },
  {
    icon: <PlacesIcon />,
    name: "Places",
    url: "/places",
    id: "places",
    component: MyPolygon,
  },
  {
    icon: <BranchesIcon />,
    name: "Branches",
    url: "/branches",
    id: "branches",
    component: Branches,
  },
  {
    icon: <ModeratorsIcon />,
    name: "Moderators",
    url: "/moderators",
    id: "moderators",
    component: Moderators,
  },
  {
    icon: <NewsIcon />,
    name: "News",
    url: "/news",
    id: "news",
    component: News,
  },
];
