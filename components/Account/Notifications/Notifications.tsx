import { fetchMe } from "@/utils/Api/userApi";
import SectionBox from "../SectionBox";
import EmailNotificationsSection from "../Sections/EmailNotifications/EmailNotifications";
import PhoneNotificationsSection from "../Sections/PhoneNotifications/PhoneNotifications";

const Notifications = async () => {
  const user = await fetchMe();
  return (
    <div className=" flex flex-col gap-8">
      <SectionBox title="Email Notifications">
        <EmailNotificationsSection user={user} />{" "}
      </SectionBox>
      <SectionBox title="Phone Notifications">
        <PhoneNotificationsSection user={user} />
      </SectionBox>
    </div>
  );
};

export default Notifications;
