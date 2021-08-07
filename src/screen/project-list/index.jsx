import React from 'react';
import { useState, useEffect } from 'react'
import { List } from "./list"
import { SearchPanel } from './search-panel';
import { cleanObject } from 'utils/index.js';
import { useMount } from 'hooks/useMount';
import qs from 'qs'
import { useDebounce } from 'hooks/useDebounce';


const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([])

  const [param, setParam] = useState({
    name: '',
    personId: ''
  })

  const [list, setList] = useState([])
  const debounceValue = useDebounce(param, 2000)

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceValue))}`).then(async (response) => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debounceValue]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  })

  return <div>
    <SearchPanel users={users} param={param} setParam={setParam} />
    <List users={users} list={list} />
  </div>
}