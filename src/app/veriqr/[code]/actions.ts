import { COPS_URL } from "@/utils/strapi";

export const fetchVerifyQR = async (id: string) => {
  const response = await fetch(`${COPS_URL}/web/test2.asp?qr=` + id);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${id}`);
  }
  console.log(response, typeof response);
  const data = response;
  return data;
};
