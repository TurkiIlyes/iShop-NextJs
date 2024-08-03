import SectionBox from "../SectionBox";
import ChangePassword from "../Sections/ChangePassword/ChangePassword";
import { fetchMe } from "@/utils/Api/userApi";

const Security = async () => {
  const user = await fetchMe();
  return (
    <div className=" flex flex-col gap-8">
      <SectionBox title="Change Password">
        <ChangePassword user={user} />
      </SectionBox>
      {/* <LoginHistorySection /> */}
    </div>
  );
};

export default Security;
