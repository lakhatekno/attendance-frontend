import { AuthStore } from "@/store/auth.store";
import api from "./axios";

export async function getAllUsers() {
  const token = AuthStore.getState().accessToken;
  const response = await api.get('/users', {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });

  return response.data;
}