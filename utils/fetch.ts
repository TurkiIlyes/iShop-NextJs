import { getSession } from "next-auth/react";

const instance = async (url: string, options: RequestInit = {}) => {
  const session = await getSession();
  const token = session?.user?.token;
  const headers = new Headers(options.headers || {});
  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  const fetchOptions = {
    ...options,
    headers,
  };

  return fetch(url, fetchOptions);
};

export default instance;
