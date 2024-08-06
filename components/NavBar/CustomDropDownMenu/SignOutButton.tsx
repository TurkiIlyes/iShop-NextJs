"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  const handleSignOut = () => {
    signOut();
  };
  return (
    <button
      type="button"
      onClick={handleSignOut}
      className=" flex items-center text-base text-customRed-900 font-medium"
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </button>
  );
};

export default SignOutButton;
