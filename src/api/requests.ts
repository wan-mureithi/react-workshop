import axios, { AxiosRequestConfig, Method } from 'axios'
import { User, Post, Album, Photo, Todo } from "../types"


const BASE_URL = 'https://jsonplaceholder.typicode.com'

export async function makeRequest<T>(
  endpoint: string,
  method: Method = 'GET',
  data: any = null,
  params: any = null,
): Promise<T> {
  const options: AxiosRequestConfig = {
    url: `${BASE_URL}${endpoint}`,
    method,
    headers: { 'Content-Type': 'application/json' },
    data,
    params,
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    throw new Error(`Failed to ${method} ${endpoint} data: ${error.message}`);
  }
}

export async function getUsers(): Promise<User[]> {
    return await makeRequest<User[]>('/users', 'GET')
  }
  
  // Fetch all posts
  export async function getPosts(): Promise<Post[]> {
    return await makeRequest<Post[]>('/posts', 'GET')
  }
  
  // Fetch all comments
  export async function getComments(): Promise<Comment[]> {
    return await makeRequest<Comment[]>('/comments', 'GET')
  }
  
  // Fetch all albums
  export async function getAlbums(): Promise<Album[]> {
    return await makeRequest<Album[]>('/albums', 'GET')
  }
  
  // Fetch all photos
  export async function getPhotos(): Promise<Photo[]> {
    return await makeRequest<Photo[]>('/photos', 'GET')
  }
  
  // Fetch all todos
  export async function getTodos(): Promise<Todo[]> {
    return await makeRequest<Todo[]>('/todos', 'GET')
  }
export const fetchRandomUsers = async (count: number = 10): Promise<User[]> => {
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=${count}`)
      return response.data.results
    } catch (error) {
      console.error('Error fetching users:', error)
      throw error;
    }
  }