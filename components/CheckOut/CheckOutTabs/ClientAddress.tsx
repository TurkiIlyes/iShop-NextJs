"use client";

import AddressDetailsSection from "@/components/Account/Sections/AddressDetails.tsx/AddressDetails";
import useGetLoggedUserData from "@/components/hooks/useGetLoggedUserData";
import CustomTabCard from "./CustomTabCard";

const ClientAddress = () => {
  const { user } = useGetLoggedUserData();
  return (
    <CustomTabCard title="Client Address">
      <AddressDetailsSection user={user} />
    </CustomTabCard>
  );
};

export default ClientAddress;
