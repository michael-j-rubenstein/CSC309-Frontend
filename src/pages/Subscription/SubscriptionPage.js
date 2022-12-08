const SubscriptionPage = () => {
  const [userInfo, setUserInfo] = useState({});

  var bearer = localStorage.getItem("SavedToken");

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `${bearer}`,
      },
    };

    if (bearer) {
      // get all subscription data

      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}subscriptions`, config)
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
  return <h2>This is SubscriptionPage</h2>;
};

export default SubscriptionPage;
