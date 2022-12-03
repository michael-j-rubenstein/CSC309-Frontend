import { useState } from "react";
import AdminInputSelector from "../../components/Forms/Admin/AdminInputSelector";
import Wrapper from "../../components/Layout/Wrapper";

import AddSubscription from "../../components/Forms/Admin/AddSubscription";
import UpdateSubscription from "../../components/Forms/Admin/UpdateSubscription";
import DeleteSubscription from "../../components/Forms/Admin/DeleteSubscription";
import AddClass from "../../components/Forms/Admin/AddClass";
import RemoveEntireClass from "../../components/Forms/Admin/RemoveEntireClass";
import RemoveOneClass from "../../components/Forms/Admin/RemoveOneClass";

const AdminPage = () => {
  const [form, setForm] = useState("subscription-add");

  const selectHandler = (event) => {
    setForm(event.target.value);
  };

  var currForm = <AddSubscription />;

  switch (form) {
    case "subscription-update":
      currForm = <UpdateSubscription />;
      break;

    case "subscription-remove":
      currForm = <DeleteSubscription />;
      break;

    case "class-create":
      currForm = <AddClass />;
      break;

    case "class-remove-one":
      currForm = <RemoveOneClass />;
      break;

    case "class-remove-all":
      currForm = <RemoveEntireClass />;
      break;

    default:
      currForm = <AddSubscription />;
  }

  return (
    <Wrapper>
      <h2>This is admin page</h2>
      <AdminInputSelector selectHandler={selectHandler}></AdminInputSelector>
      {currForm}
    </Wrapper>
  );
};

export default AdminPage;
