import LinksList from "./LinksList";

const accountData = [
  { title: "My Account", url: "" },
  { title: "Login", url: "" },
  { title: "Register", url: "" },
  { title: "Cart", url: "" },
  { title: "Wishlist", url: "" },
];

const quickLinksData = [
  { title: "Privacy Policy", url: "" },
  { title: "Terms Of Use", url: "" },
  { title: "FAQ", url: "" },
  { title: "Contact", url: "" },
];

const SectionTwo = () => {
  return (
    <div className=" flex justify-center gap-20 sm:gap-3 w-full sm:w-[38%] lg:w-[35%] px-3">
      <LinksList title="Account" data={accountData} />
      <LinksList title="Quick Link" data={quickLinksData} />
    </div>
  );
};

export default SectionTwo;
