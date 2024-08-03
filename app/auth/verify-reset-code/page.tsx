import CustomAuthPage from "@/components/Auth/CustomAuthPage";
import VerifyResetCode from "@/components/Auth/Form/VerifyResetCode/VerifyResetCode";

const page = () => {
  return (
    <CustomAuthPage
      title="Check verification code"
      subTitle="It's easy! just take a minute and provide the details."
    >
      <VerifyResetCode AuthButtonTitle="Check Code" />
    </CustomAuthPage>
  );
};

export default page;
