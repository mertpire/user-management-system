import { axiosInstance } from "./index";
interface User {
  id: number
  name: string
  email: string
  age: number
}
class UserService {
  static getUsers() {
    return axiosInstance.get('/users')
  }
  static getUserById(id:number) {
    return axiosInstance.get(`/users/${id}`)
  }
  static createUser(user:User) {
    return axiosInstance.post(`/users`, user)
  }
  static updateUser(user:User) {
    return axiosInstance.put(`/users/${user.id}`, user)
  }
  static deleteUser(id:number) {
    return axiosInstance.delete(`/users/${id}`)
  }
}
export default UserService