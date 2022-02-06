import React, { useState, useEffect } from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import {
  Body,
  H1,
  ImageBorder,
  MenuItem,
  MenuItemAddon,
  MenuList,
  MenuName,
  NavBtnStyle,
  NavigatorStyle,
  Sidebar,
  User,
  UserImage,
  UserName,
  UserPhone,
  Name,
} from "./main-view.s";
import UserIMG from "../../assats/images/User.png";
import { MenuData } from "./menu-data";
import { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ReactComponent as MenuIconSVG } from "../../assats/icons/menu.svg";
import { ReactComponent as HiSVG } from "../../assats/icons/hi.svg";
import MyButton from "../../components/my-button/my-button";
import ShiftHistory from "../Shift/shift-history";
import ShiftsPays from "../Shift/shifts-pays";
import Loading from "../../components/loading/loading";
import client from "../../client";
import { ReactComponent as ExitIcon } from "../../assats/icons/exit.svg";

function MainView(props) {
  const location = useLocation();
  const history = useHistory();

  const user = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const [menuType, setMenuType] = useState(true);
  const [access_rights, set_access_rights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mainPage, setMainPage] = useState("");

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    client
      .get(`moderator/access-get`)
      .then((res) => {
        set_access_rights(res.data.data.access_rights);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          localStorage.removeItem("token");
          history.push("/login");
        }
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading loading={loading} onWindow />;
  }
  return (
    <>
      <MyDiv height="100%" line padding="20px 16px 20px 8px">
        <Sidebar menu={menuType}>
          <User>
            <ImageBorder>
              <UserImage src={UserIMG} />
            </ImageBorder>
            <Name>
              <UserName>Samantha</UserName>
              <UserPhone>+998 (99) 436-46-15</UserPhone>
            </Name>
          </User>
          <MenuList>
            {MenuData.map((item, index) => (
              <>
                {access_rights[item.id] && (
                  <Link to={item.url}>
                    <MenuItem
                      menu={menuType}
                      activ={
                        location.pathname.search(item.url) < 0 ? false : true
                      }
                      key={index}
                    >
                      {location.pathname === item.url && (
                        <MenuItemAddon className="top" />
                      )}
                      {item.icon}
                      <MenuName menu={menuType}>{item.name}</MenuName>
                      {location.pathname === item.url && (
                        <MenuItemAddon className="bottom" />
                      )}
                    </MenuItem>
                  </Link>
                )}
              </>
            ))}
          </MenuList>
        </Sidebar>

        <Body menu={menuType}>
          <NavigatorStyle>
            <MyDiv line>
              <MyButton
                onClick={() => setMenuType(!menuType)}
                text={<MenuIconSVG />}
                icon
              />
              <H1>{username} welcome to the taxi</H1>
              <HiSVG />
              {/* <H2>
              you have <SPAN>1 new message</SPAN>
            </H2> */}
            </MyDiv>
            <NavBtnStyle>
              {/* <MyButton text={<ModeSVG />} icon /> */}
              {/* <MyButton text={<NewsSVG />} icon /> */}
              <MyButton
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("username");
                  history.push("/login");
                }}
                text={<ExitIcon />}
                icon
              />
            </NavBtnStyle>
          </NavigatorStyle>
          <Switch>
            <Route exact path="/shift/history" component={ShiftHistory} />
            <Route exact path="/shift/pays" component={ShiftsPays} />
            {MenuData.map(
              (item, index) =>
                access_rights[item.id] && (
                  <Route key={index} exact path={item.url}>
                    {mainPage ? "" : setMainPage(item.url)}
                    <item.component />
                  </Route>
                )
            )}
            <Route path="*">
              <Redirect to={user ? mainPage : "/login"} />
            </Route>
          </Switch>
        </Body>
      </MyDiv>
    </>
  );
}

export default MainView;
