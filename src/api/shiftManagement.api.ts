import { AuthStore } from "@/store/auth.store";
import api from "./axios";

interface WindowAssignment {
  month: number;
  year: number;
}

export async function getAllAssignment(data: WindowAssignment) {
  const token = AuthStore.getState().accessToken;
  const response = await api.post('/shift-assignments/monthly', {
    month: data.month + 1,
    year: data.year,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  return response.data;
}