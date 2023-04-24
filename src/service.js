import axios from "axios";

class StudentService {
  getAll() {
    return axios.get(`http://localhost:3001/api/v1/students`)
  }

  get(id) {
    return axios.get(`http://localhost:3001/api/v1/students/${id}`)
  }

  getStudentsByClass(classId) {
    return axios.get(`http://localhost:3001/api/v1/students?classId=IELTS90`)
  }
}
export default new StudentService();

export class StatisticsService {
  static getAttendances(classId) {
    return axios.get(`http://localhost:3001/api/v1/statistics/attendances/IELTS90`)
  }
  
  static getHomework(classId) {
    return axios.get(`http://localhost:3001/api/v1/statistics/homework/IELTS90`)
  }

  static getPeriodicTests(classId) {
    return axios.get(`http://localhost:3001/api/v1/statistics/tests/IELTS90`)
  }
}

export class TestsService {
  static getHomework(classId) {
    return axios.get(`http://localhost:3001/api/v1/tests/homework/IELTS90`)
  }
  static getPeriodicTests(classId) {
    return axios.get(`http://localhost:3001/api/v1/tests/periodic-tests/IELTS90`)
  }
}