import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusFilter } from "@/types/StatusFilter";

const ITEMS_STORAGE_KEY = "@comprar:items"

export type ItemsStorage = {
  id: string,
  description: string,
  status: StatusFilter
}

async function get(): Promise<ItemsStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY)
    return storage ? JSON.parse(storage) : []
  } catch (error) {
    throw new Error("GET_ITEMS: " + error)
  }
}

async function getByStatus(status: StatusFilter): Promise<ItemsStorage[]> {
  const items = await get()
  return items.filter(item => item.status === status)
}

export const itemStorage = {
  get,
  getByStatus,
}