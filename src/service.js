import axios from "axios";

class StudentService {
  getAll() {
    return axios.get(`http://localhost:3001/api/v1/students`)
  }

  get(id) {
    return axios.get(`http://localhost:3001/api/v1/students/${id}`)
  }
}
class ClassService {
  getAll() {
    return axios.get(`http://localhost:3001/api/v1/class`);
  }

  get(id) {
    return axios.get(`http://localhost:3001/api/v1/class/${id}`);
  }
}


// export default new StudentService();

const studentService = new StudentService();
const classService = new ClassService();

export const apiServices = {
  studentService,
  classService
};