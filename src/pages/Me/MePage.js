import { useEffect, useState } from "react";
import ClassList from "../../components/Class/ClassList";
import MeInputSelector from "../../components/Forms/MeInputSelector";
import MyInfoInput from "../../components/Forms/MyInfoInput";
import InvoiceHistory from "../../components/Invoice/InvoiceHistory";
import InvoiceUpcoming from "../../components/Invoice/InvoiceUpcoming";
import Wrapper from "../../components/Layout/Wrapper";
import MySubscriptionDisplay from "../../components/Profile/MySubscriptionDisplay";
import Title from "../../components/Text/Title";

import axios from "axios";

const MePage = () => {
  const [userInfo, setUserInfo] = useState({});

  var bearer = localStorage.getItem("SavedToken");

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `${bearer}`,
      },
    };

    if (bearer) {
      // get classes data

      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}accounts/me/`, config)
        .then((res) => {
          console.log(res.data);
          const data = res.data;
          setUserInfo({
            fname: data.first_name ? data.first_name : "",
            lname: data.last_name ? data.last_name : "",
            email: data.email ? data.email : "",
            phone: data.phone_number ? data.phone_number * 1 : "",
            avatar: data.avatar ? data.avatar : "",
          });
        });
    }
  }, [bearer]);

  const [form, setForm] = useState("profile");

  const selectHandler = (event) => {
    setForm(event.target.value);
  };

  var currForm = (
    <MyInfoInput
      data={userInfo}
      setData={setUserInfo}
      disabled={true}
    ></MyInfoInput>
  );

  switch (form) {
    case "edit":
      currForm = (
        <MyInfoInput
          data={userInfo}
          setData={setUserInfo}
          disabled={false}
        ></MyInfoInput>
      );
      break;

    case "subscriptions":
      currForm = <MySubscriptionDisplay></MySubscriptionDisplay>;
      break;

    default:
      currForm = (
        <MyInfoInput
          data={userInfo}
          setData={setUserInfo}
          disabled={true}
        ></MyInfoInput>
      );
  }

  return (
    <Wrapper>
      <Title className="section">My Information</Title>
      <MeInputSelector selectHandler={selectHandler}></MeInputSelector>
      {currForm}
      <Title className="section">Enrolled Classes</Title>
      <ClassList></ClassList>
      <Title className="section">Upcoming Invoice</Title>
      <InvoiceUpcoming></InvoiceUpcoming>
      <Title className="section">Invoice History</Title>
      <InvoiceHistory></InvoiceHistory>
    </Wrapper>
  );
};

export default MePage;
