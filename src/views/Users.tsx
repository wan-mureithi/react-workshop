import React, {useState} from 'react'
import {useQuery} from "@tanstack/react-query"
import { getUsers } from '../api/requests'

function Users() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: getUsers,
  })
  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error}</span>
  }
console.log(data)
  return (
    <div>Users</div>
  )
}

export default Users