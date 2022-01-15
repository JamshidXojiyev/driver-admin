import React, { useState } from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import {
  Body,
  H1,
  H2,
  ImageBorder,
  MenuItem,
  MenuItemAddon,
  MenuList,
  MenuName,
  NavBtnStyle,
  NavigatorStyle,
  Sidebar,
  SPAN,
  Title,
  User,
  UserImage,
  UserName,
  UserPhone,
  BodyContent,
} from "./main-view.s";
import UserIMG from "../../assats/images/User.png";
import { MenuData } from "./menu-data";
import { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";
import Dashboard from "../Dashboard/dashboard";
import { useLocation } from "react-router-dom";
import { ReactComponent as MenuIconSVG } from "../../assats/icons/menu.svg";
import { ReactComponent as HiSVG } from "../../assats/icons/hi.svg";
import { ReactComponent as NewsSVG } from "../../assats/icons/news.svg";
import { ReactComponent as ModeSVG } from "../../assats/icons/mode.svg";
import MyButton from "../../components/my-button/my-button";
import Clients from "../Clients/clients";
import Orders from "../Orders/orders";
import Rides from "../Rides/rides";
import Moderators from "../Moderators/moderators";
import CarClasses from "../Car-Classes/car-classes";

function MainView(props) {
  const location = useLocation();
  const [menuType, setMenuType] = useState(true);
  const user = localStorage.getItem("token");

  return (
    <MyDiv height="100%" line padding="20px 20px 20px 8px">
      <Sidebar menu={menuType}>
        <User menu={menuType}>
          <ImageBorder>
            <UserImage src={UserIMG} />
          </ImageBorder>
          {menuType && (
            <MyDiv margin="0 0 0 8px ">
              <UserName>Samantha</UserName>
              <UserPhone>+998 (99) 436-46-15</UserPhone>
            </MyDiv>
          )}
        </User>
        <Title menu={menuType}>MAIN {menuType && "MENU"} </Title>
        <MenuList>
          {MenuData.map((item, index) => (
            <Link to={item.url}>
              <MenuItem
                menu={menuType}
                activ={location.pathname === item.url ? true : false}
                key={index}
              >
                {location.pathname === item.url && (
                  <MenuItemAddon className="top" />
                )}
                {item.icon}
                {menuType && <MenuName>{item.name}</MenuName>}

                {location.pathname === item.url && (
                  <MenuItemAddon className="bottom" />
                )}
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </Sidebar>

      <Body>
        <NavigatorStyle>
          <MyDiv line>
            <MyButton
              onClick={() => setMenuType(!menuType)}
              text={<MenuIconSVG />}
              icon
            />
            <H1>Good morning, Maharram</H1>
            <HiSVG />
            <H2>
              you have <SPAN>1 new message</SPAN>
            </H2>
          </MyDiv>
          <NavBtnStyle>
            <MyButton text={<ModeSVG />} icon />
            <MyButton text={<NewsSVG />} icon />
            <UserImage src={UserIMG} />
          </NavBtnStyle>
        </NavigatorStyle>
        <BodyContent>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to={user ? "/dashboard" : "/login"} />}
            />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/rides" component={Rides} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/car-classes" component={CarClasses} />
            <Route exact path="/moderators" component={Moderators} />
          </Switch>
        </BodyContent>
      </Body>
    </MyDiv>
  );
}

export default MainView;
