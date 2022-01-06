import React, { useState } from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import {
  Body,
  H1,
  H2,
  ImageBorder,
  MenuIcon,
  MenuItem,
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
} from "./main-view.s";
import UserIMG from "../../assats/images/User.png";
import { MenuData } from "./menu-data";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../Dashboard/dashboard";
import { useLocation } from "react-router-dom";
import { ReactComponent as MenuIconSVG } from "../../assats/icons/menu.svg";
import { ReactComponent as HiSVG } from "../../assats/icons/hi.svg";
import { ReactComponent as NewsSVG } from "../../assats/icons/news.svg";
import { ReactComponent as ModeSVG } from "../../assats/icons/mode.svg";
import MyButton from "../../components/my-button/my-button";
import Clients from "../Clients/clients";
import Drivers from "../Drivers/drivers";
import Orders from "../Orders/orders";

function MainView(props) {
  const location = useLocation();
  const [menuType, setMenuType] = useState(true);

  return (
    <MyDiv line padding="20px 20px 20px 8px">
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
                {item.icon}
                {menuType && <MenuName>{item.name}</MenuName>}
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </Sidebar>

      <Body>
        <NavigatorStyle>
          <MyDiv line>
            <MyButton
              text={<MenuIconSVG onClick={() => setMenuType(!menuType)} />}
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
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/drivers" component={Drivers} />
        </Switch>
      </Body>
    </MyDiv>
  );
}

export default MainView;
