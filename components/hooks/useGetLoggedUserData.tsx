"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getUser } from "@/redux/slices/usersSlice";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const useGetLoggedUserData = () => {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users.user);
  const updateSuccess = useAppSelector((state) => state.users.updateSuccess);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, session]);

  useEffect(() => {
    if (updateSuccess) {
      dispatch(getUser());
    }
  }, [updateSuccess, dispatch, session]);
  
  
  
  
  return { user };
};

export default useGetLoggedUserData;
