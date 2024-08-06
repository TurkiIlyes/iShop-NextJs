"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  PackageSearch,
  PlusCircle,
  Settings,
  Shapes,
  ShoppingCart,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import NavMenuCollapsible from "../Collapsible/NavMenuCollapsible";
import SignOutButton from "./CustomDropDownMenu/SignOutButton";
import MobileNavBarAvatar from "./MobileNavBarAvatar";
const mainAccountMenuContent = [
  {
    title: "Profile",
    icon: User, // Using Lucide User icon
    link: "/account/",
  },
  {
    title: "Address",
    icon: Mail, // Using Lucide Mail icon (you might want to find a more suitable one)
    link: "/account/address",
  },
  {
    title: "Notifications",
    icon: MessageSquare, // Using Lucide MessageSquare icon
    link: "/account/notifications",
  },
  {
    title: "Security",
    icon: Settings, // Using Lucide Settings icon
    link: "/account/security",
  },
];

const secondaryAccountMenuContent = [
  {
    title: "Orders",
    icon: CreditCard, // Using Lucide CreditCard icon (you might want to find a more suitable one)
    link: "/account/orders",
  },
  {
    title: "Wishlist",
    icon: LifeBuoy, // Using Lucide LifeBuoy icon (you might want to find a more suitable one)
    link: "/account/wishlist",
  },
];

const dashboardSubMenuContent = [
  {
    title: "Customers",
    icon: Users, // Using Lucide Users icon
    content: [
      {
        title: "Customers Panel",
        icon: Settings, // Using Lucide Settings icon
        link: "/dashboard/customers",
      },
      {
        title: "Create Customer",
        icon: UserPlus, // Using Lucide UserPlus icon
        link: "/dashboard/customers/create-customer",
      },
    ],
  },
  {
    title: "Products",
    icon: PackageSearch, // Using Lucide Cloud icon (you might want to find a more suitable one)
    content: [
      {
        title: "Products Panel",
        icon: Settings, // Using Lucide Settings icon
        link: "/dashboard/products",
      },
      {
        title: "Create Product",
        icon: PlusCircle, // Using Lucide PlusCircle icon
        link: "/dashboard/products/create-product",
      },
    ],
  },
  {
    title: "Categories",
    icon: Shapes, // Using Lucide Keyboard icon (you might want to find a more suitable one)
    content: [
      {
        title: "Categories Panel",
        icon: Settings, // Using Lucide Settings icon
        link: "/dashboard/categories",
      },
      {
        title: "Create Category",
        icon: PlusCircle, // Using Lucide PlusCircle icon
        link: "/dashboard/categories/create-category",
      },
    ],
  },
  {
    title: "Orders",
    icon: ShoppingCart, // Using Lucide Github icon (you might want to find a more suitable one)
    content: [
      {
        title: "Orders Panel",
        icon: Settings, // Using Lucide Settings icon
        link: "/dashboard/orders",
      },
    ],
  },
];

const MobileNavBar = ({
  session,
}: {
  session?: { user?: { image?: string; role?: string } } | null;
}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <FontAwesomeIcon icon={faBars} className=" w-5 h-5 " />
      </SheetTrigger>

      <SheetContent className=" w-[250px] px-0">
        <SheetHeader className="flex justify-between items-center pb-5">
          <MobileNavBarAvatar image={session?.user?.image} />
        </SheetHeader>
        <div className=" flex flex-col w-full h-full text-grayscale-900 pb-28  overflow-y-scroll scroll">
          <SheetTitle className="pl-4 py-3">Account</SheetTitle>
          <hr className="border-grayscale-400 h-[1px] " />
          <div className=" px-3 py-2 ">
            {mainAccountMenuContent.map((e, i) => {
              return (
                <NavMenuCollapsible
                  key={i}
                  icon={e.icon}
                  link={e.link}
                  title={e.title}
                />
              );
            })}
          </div>
          <hr className="border-grayscale-400 h-[1px] " />
          <div className=" px-3 py-2">
            {secondaryAccountMenuContent.map((e, i) => {
              return (
                <NavMenuCollapsible
                  key={i}
                  icon={e.icon}
                  link={e.link}
                  title={e.title}
                />
              );
            })}
          </div>
          <hr className="border-grayscale-400 h-[1px] " />

          {session?.user?.role === "admin" && (
            <>
              <SheetTitle className="pl-4 py-3">Dashboard</SheetTitle>
              <hr className="border-grayscale-400 h-[1px] " />
              <div className=" px-3 py-2">
                {dashboardSubMenuContent.map((e, i) => {
                  return (
                    <NavMenuCollapsible
                      key={i}
                      icon={e.icon}
                      title={e.title}
                      content={e.content}
                    />
                  );
                })}
              </div>
              <hr className="border-grayscale-400 h-[1px] " />
            </>
          )}

          <div className=" px-6 py-2">
            <SignOutButton />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;
