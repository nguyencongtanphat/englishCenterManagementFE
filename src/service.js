import axios from "axios";

class StudentService {
  getAll() {
    return axios.get(`http://localhost:3001/api/v1/students`)
  }

  get(id) {
    return axios.get(`http://localhost:3001/api/v1/students/${id}`)
  }

  getStudentsByClass(classId) {
    return axios.get(`http://localhost:3001/api/v1/students?classId=TOE700.1`)
  }
}
export default new StudentService();

export class ClassService {
  static getAll() {
    return axios.get(`http://localhost:3001/api/v1/class`);
  }

  static get(id) {
    return axios.get(`http://localhost:3001/api/v1/class/${id}`);
  }
}


export class StatisticsService {
  // replace TOE700.1 with classId later
  static getAttendances(classId) {
    return axios.get(`http://localhost:3001/api/v1/statistics/attendances/TOE700.1`)
  }

  static getHomework(classId) {
    return axios.get(`http://localhost:3001/api/v1/statistics/homework/TOE700.1`)
  }

  static getPeriodicTests(classId) {
    return axios.get(`http://localhost:3001/api/v1/statistics/tests/TOE700.1`)
  }

  static postPeriodicTest(tests) {
    return axios.post(`http://localhost:3001/api/v1/statistics/tests/TOE700.1`, {
      tests
    })
  }
}

export class TestsService {
  static getHomework(classId) {
    return axios.get(`http://localhost:3001/api/v1/tests/homework/TOE700.1`)
  }
  static getPeriodicTests(classId) {
    return axios.get(`http://localhost:3001/api/v1/tests/periodic-tests/TOE700.1`)
  }
}

