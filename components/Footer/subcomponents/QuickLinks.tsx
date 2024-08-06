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

const QuickLinks = () => {
  return (
    <div className=" max-sm:w-full px-4 h-full flex max-sm:justify-between gap-12 ">
      <LinksList title="Account" data={accountData} />
      <LinksList title="Quick Link" data={quickLinksData} />
    </div>
  );
};

export default QuickLinks;
