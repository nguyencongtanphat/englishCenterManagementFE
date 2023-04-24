import axios from "axios";

class StudentService {
  getAll() {
    return axios.get(`http://localhost:3001/api/v1/students`)
  }

  get(id) {
    return axios.get(`http://localhost:3001/api/v1/students/${id}`)
  }

  getClassesRecommend() {
      return axios.get(`http://localhost:3001/api/v1/classes`)
  }
}

export default new StudentService();