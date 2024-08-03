"use client";
import Link from "next/link";

const CheckoutButton = ({
  href,
  onClick,
}: {
  href: string;
  onClick?: () => void;
}) => {
  return (
    <Link href={href} onClick={() => (onClick ? onClick() : null)}>
      <button
        type="button"
        className=" w-full py-3 bg-grayscale-900 text-base text-white font-medium rounded-sm"
      >
        checkout
      </button>
    </Link>
  );
};

export default CheckoutButton;
