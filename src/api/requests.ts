import axios from "axios"
import { User } from "../types"


export const fetchRandomUsers = async (count: number = 10): Promise<User[]> => {
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=${count}`)
      return response.data.results
    } catch (error) {
      console.error('Error fetching users:', error)
      throw error;
    }
  };