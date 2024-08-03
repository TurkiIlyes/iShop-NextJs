import CustomAuthPage from "@/components/Auth/CustomAuthPage";
import VerifySignUp from "@/components/Auth/Form/VerifySignUp/VerifySignUp";

const page = () => {
  return (
    <CustomAuthPage
      title="Check Sign-Up code"
      subTitle="It's easy! just take a minute and provide the details."
    >
      <VerifySignUp AuthButtonTitle="Check  Code" />
    </CustomAuthPage>
  );
};

export default page;
