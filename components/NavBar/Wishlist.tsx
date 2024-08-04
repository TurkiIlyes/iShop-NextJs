import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

const Wishlist = () => {
  return (
    <Link href="/account/wish-list" className="">
      <FontAwesomeIcon icon={faHeart} size="1x" />
    </Link>
  );
};

export default Wishlist;
