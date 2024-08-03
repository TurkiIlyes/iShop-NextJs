import CustomAuthPage from "@/components/Auth/CustomAuthPage";
import ResetPassword from "@/components/Auth/Form/ResetPassword/ResetPassword";

const page = () => {
  return (
    <CustomAuthPage
      title="Change password"
      subTitle="It's easy! just take a minute and provide the details."
    >
      <ResetPassword AuthButtonTitle="Change" />
    </CustomAuthPage>
  );
};

export default page;
