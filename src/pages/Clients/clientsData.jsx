import MyButton from "../../components/my-button/my-button";
import { MyDiv } from "../../global-styles/my-div.s";
import { UserImage } from "../../global-styles/user.s";
import { UserName, UserPhone } from "../../global-styles/user.s";
import { ReactComponent as EditSVG } from "../../assats/icons/edit.svg";
import { ReactComponent as DeleteSVG } from "../../assats/icons/delete.svg";
export const ClientsData = {
  header: [
    "User",
    "Total Rides",
    "Total Finished",
    "Home Location",
    "Work Location",
    "",
  ],
  body: [
    {
      user: (
        <MyDiv line width="150px" margin="8px 0 8px 0">
          <UserImage src="https://randomuser.me/api/portraits/women/50.jpg" />
          <MyDiv>
            <UserName>Rachel Carlson</UserName>
            <UserPhone>(721)-723-1807</UserPhone>
          </MyDiv>
        </MyDiv>
      ),
      total_rides: "132",
      total_finished: "6",
      home_location: "пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston",
      work_location: "13 Kumarik ko'chasi, Tashkent 100167, Oʻzbekiston",
      btn: (
        <MyDiv line>
          <MyButton icon text={<EditSVG />} />
          <MyButton icon text={<DeleteSVG />} />
        </MyDiv>
      ),
    },
    {
      user: (
        <MyDiv line width="150px" margin="8px 0 8px 0">
          <UserImage src="https://randomuser.me/api/portraits/men/40.jpg" />
          <MyDiv>
            <UserName>Allen Stephens</UserName>
            <UserPhone>(721)-723-1807</UserPhone>
          </MyDiv>
        </MyDiv>
      ),
      total_rides: "132",
      total_finished: "6",
      home_location: "пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston",
      work_location: "13 Kumarik ko'chasi, Tashkent 100167, Oʻzbekiston",
      btn: (
        <MyDiv line>
          <MyButton icon text={<EditSVG />} />
          <MyButton icon text={<DeleteSVG />} />
        </MyDiv>
      ),
    },
    {
      user: (
        <MyDiv line width="180px" margin="8px 0 8px 0">
          <UserImage src="https://randomuser.me/api/portraits/women/66.jpg" />
          <MyDiv>
            <UserName>Tracy Cunningham</UserName>
            <UserPhone>(721)-723-1807</UserPhone>
          </MyDiv>
        </MyDiv>
      ),
      total_rides: "132",
      total_finished: "6",
      home_location: "пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston",
      work_location: "13 Kumarik ko'chasi, Tashkent 100167, Oʻzbekiston",
      btn: (
        <MyDiv line>
          <MyButton icon text={<EditSVG />} />
          <MyButton icon text={<DeleteSVG />} />
        </MyDiv>
      ),
    },
  ],
  order: [
    "user",
    "total_rides",
    "total_finished",
    "home_location",
    "work_location",
    "btn",
  ],
};
