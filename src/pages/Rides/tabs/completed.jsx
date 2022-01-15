import React, { useEffect, useState } from "react";
import MyButton from "../../../components/my-button/my-button";
import MyTable from "../../../components/my-table/my-table";
import { MyDiv } from "../../../global-styles/my-div.s";
import { Status } from "../../../global-styles/table.s";
import { UserImage, UserName, UserPhone } from "../../../global-styles/user.s";
import { ReactComponent as ViewIcon } from "../../../assats/icons/view.svg";
import MyMessage from "../../../components/message/message";

function Completed(props) {
  const dataBase = [
    {
      user_name: "Rachel Carlson",
      phone: "(721)-723-1807",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
      car_class_name: "Комфорт",
      ordered_time: "29.12.2021 10:24	",
      rider_rate: "5",
      rider_comment: "",
    },
  ];
  const [newData, setNewData] = useState({
    header: [
      "",
      "Rider",
      "Car class name",
      "Ordered time",
      "Rider rate",
      "Rider comment",
      "Driver",
      "Start location",
      "Destination location",
      "Total cost",
      "Payment method",
      "Payment state",
      "Driver rate",
      "Driver comment",
    ],
    body: [],
    order: [
      "view",
      "rider",
      "car_class_name",
      "ordered_time",
      "rider_rate",
      "rider_comment",
      "driver",
      "start_location",
      "destination_location",
      "total_cost",
      "payment_method",
      "payment_state",
      "driver_rate",
      "driver_comment",
    ],
  });
  useEffect(() => {
    const data = dataBase.map((item) => {
      const testData = {
        view: (
          <MyButton
            onClick={() => setMessageType(!messageType)}
            icon
            text={<ViewIcon />}
          />
        ),
        rider: (
          <MyDiv line width="150px" margin="8px 0 8px 0">
            <UserImage src={item.img} />
            <MyDiv>
              <UserName>{item.user_name}</UserName>
              <UserPhone>{item.phone}</UserPhone>
            </MyDiv>
          </MyDiv>
        ),
        car_class_name: item.car_class_name,
        ordered_time: item.ordered_time,
        rider_rate: item.rider_rate,
        rider_comment: <MyDiv width="80px">{item.rider_comment}</MyDiv>,
        driver: (
          <MyDiv line width="150px" margin="8px 0 8px 0">
            <UserImage src={item.img} />
            <MyDiv>
              <UserName>{item.user_name}</UserName>
              <UserPhone>{item.phone}</UserPhone>
            </MyDiv>
          </MyDiv>
        ),
        start_location: item.start_location,
        destination_location: item.destination_location,
        total_cost: item.total_cost,
        payment_method: item.payment_method,
        payment_state: item.payment_state,
        driver_rate: item.driver_rate,
        driver_comment: item.driver_comment,
      };
      return testData;
    });
    setNewData({ ...newData, body: data });
  }, []);
  const [messageType, setMessageType] = useState(false);
  return (
    <>
      {messageType && <MyMessage close={(e) => setMessageType(e)} />}
      <MyTable data={newData} total="2" pageLimit="10" />
    </>
  );
}

export default Completed;
