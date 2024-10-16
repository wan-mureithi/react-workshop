 export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
      }
  }
  
  export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
      };
  }
  
export interface Post {
        id: number,
        title: string,
        body: string,
        userId: number
      
  }
  export interface Album {
    userId: number;
    id: number;
    title: string;
  }

  export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }
  export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  