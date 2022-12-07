import { useState } from "react";
import ClassList from "../../components/Class/ClassList";
import MeInputSelector from "../../components/Forms/MeInputSelector";
import MyInfoInput from "../../components/Forms/MyInfoInput";
import InvoiceHistory from "../../components/Invoice/InvoiceHistory";
import InvoiceUpcoming from "../../components/Invoice/InvoiceUpcoming";
import Wrapper from "../../components/Layout/Wrapper";
import MySubscriptionDisplay from "../../components/Profile/MySubscriptionDisplay";
import Title from "../../components/Text/Title";

const MePage = () => {
  const [userInfo, setUserInfo] = useState({
    fname: "temp",
    lname: "user",
    email: "temp@temp.com",
    phone: 4151231234,
    avatar:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1800&t=st=1670197314~exp=1670197914~hmac=8f397978a687d893ef4c9ed7498ec9d3498bd6d7850a1654e3cf879688d41b0c",
  });

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
