import CustomSearchInput from "../Common/CustomInput/CustomSearchInput";
import CartShopping from "./CartShopping/CartShopping";
import NavDropdownMenu from "./CustomDropDownMenu/CustomDropDownMenu";
import Wishlist from "./Wishlist";

const NavBar = () => {
  return (
    <div className="flex max-sm:hidden items-center gap-5">
      <CustomSearchInput />

      <Wishlist />

      <CartShopping />
      <NavDropdownMenu />
    </div>
  );
};

export default NavBar;
