import SubscriptionList from "../../components/Subscription/SubscriptionList";
import styles from "../../components/Subscription/SubscriptionItem.module.css";
import Wrapper from "../../components/Layout/Wrapper";
import Title from "../../components/Text/Title";

const SubscriptionPage = () => {
  return (<>
    <Wrapper>
        <Title className="section">Subscriptions</Title>
        <SubscriptionList/>

    </Wrapper>
    </>)
};

export default SubscriptionPage;
