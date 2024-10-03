import { defineStore } from 'pinia'
import { axiosInstance } from "@/services/axios";
interface State {
  users: UserInfo[]
  user: UserInfo
  sortBy: string | null
  order: string
}

export const useUserStore = defineStore('user', {
  state: (): State => {
    return {
      users: [],
      user: {
        id: '0',
        name: '',
        email: '',
        age: null
      },
      sortBy: 'id',
      order: 'asc'

    }
  },
  actions: {
    async getUsers() {
      try {
        const res = await axiosInstance.get(`/users?sortBy=${this.sortBy}&order=${this.order}`)
        this.users = res.data
      } catch (error) {
        console.log(error);
      }
    },
    async getUserById(id:string) {
      try {
        const res = await axiosInstance.get(`/users/${id}`)
        this.user = res.data
      } catch (error) {
        console.log(error);
                
      }
    },
    async createUser(user:UserInfo) {
      try {
        const res = await axiosInstance.post(`/users`, user)
        this.user = res.data
        this.users.push(res.data)
      } catch (error) {
        console.log(error);
      }
    },
    async updateUser(user:UserInfo) {
      try {
        await axiosInstance.put(`/users/${user.id}`, user)
        this.users.splice(this.getIndexOfUser(user.id), 1, {...user})
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUser(id:string) {
      try {
        await axiosInstance.delete(`/users/${id}`)
        this.users.splice(this.getIndexOfUser(id), 1)
        
      } catch (error) {
        console.log(error);
      }
    },
    getIndexOfUser (id:string) {
      return this.users.findIndex(userInfo => userInfo.id === id)
    }
  }
})

interface UserInfo {
  id: string,
  name: string,
  email: string,
  age: number | null
}
