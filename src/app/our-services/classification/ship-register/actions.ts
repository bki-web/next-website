import { ShipRegisterDetail, ShipRegisterHullData, ShipRegisterMachine, ShipRegisterOwner, ShipRegisterSurvey, ShipSearchResult } from "@/types/shipRegisterResult";
import { API_WEB_URL } from "@/utils/urlHelper";

interface SearchShipProps {
  nmkpl?: string;
  noreg?: string;
  noimo?: string;
  minGT?: string;
  maxGT?: string;
  page: number;
  limit: number;
}

export const searchShip = async (props: SearchShipProps) => {
  const endpoint = `${API_WEB_URL}/shipRegister/search`;
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(props),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Network response was not ok: ${response.statusText} - ${errorText}`
      );
    }
    
    try {
      const result = await response.json();
      return result as ShipSearchResult;
    } catch(err) {
      throw err;
    }
  } catch (error) {
    console.error("Failed to search for ship:", error);
    throw error;
  }
};


export const fetchShipDetail = async (id: string) => {
  const response = await fetch(
    `${API_WEB_URL}/shipRegister/detail/${id}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch with ID ${id}`);
  }

  const data = (await response.json()) as { data: ShipRegisterDetail };
  return data;
};

export const fetchHullDetail = async (id: string) => {
  const response = await fetch(
    `${API_WEB_URL}/shipRegister/hull/${id}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch with ID ${id}`);
  }

  const data = (await response.json()) as { data: ShipRegisterHullData };
  return data;
};

export const fetchOwnerDetail = async (id: string) => {
  const response = await fetch(
    `${API_WEB_URL}/shipRegister/owner/${id}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch with ID ${id}`);
  }

  const data = (await response.json()) as { data: ShipRegisterOwner };
  return data;
};

export const fetchMachineDetail = async (id: string) => {
  const response = await fetch(
    `${API_WEB_URL}/shipRegister/machine/${id}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch with ID ${id}`);
  }

  const data = (await response.json()) as { data: ShipRegisterMachine };
  return data;
};


export const fetchSurveyDetail = async (id: string) => {
  // const response = await fetch(
  //   `${API_WEB_URL}/shipRegister/survey/${id}`
  // );

  // if (!response.ok) {
  //   throw new Error(`Failed to fetch with ID ${id}`);
  // }

  // const data = (await response.json()) as { data: ShipRegisterSurvey[] };
  // return data;
  return {data: []}
};
