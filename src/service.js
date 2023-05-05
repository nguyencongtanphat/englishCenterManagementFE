import axios from "axios";

class StudentService {
  getAll() {
    return axios.get(`http://localhost:3001/api/v1/students`);
  }

  get(id) {
    return axios.get(`http://localhost:3001/api/v1/students/${id}`);
  }

  getClassesRecommend() {
    return axios.get(`http://localhost:3001/api/v1/classes`);
  }

  getStudentsByClass(classId) {
    return axios.get(`http://localhost:3001/api/v1/students?classId=${classId}`);
  }

  getStudentReportOverview() {
    return axios.get(`http://localhost:3001/api/v1/student-report/total`);
  }

  getStudentReportDailyMonthly({
    studentId = null,
    month = null,
    year = null,
    date = null,
  } = {}) {
    let queryStr = "";
    if (month) queryStr += "&month=" + month;
    if (year) queryStr += "&year=" + year;
    if (date) queryStr += "&date=" + date;
    return axios.get(
      `http://localhost:3001/api/v1/student-report/?studentid=` +
      studentId +
      queryStr
    );
  }
  getStudentReportTotal(studentId) {
    return axios.get(
      `http://localhost:3001/api/v1/student-report/monthly/` + studentId
    );
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

  static create(data) {
    return axios.post(`http://localhost:3001/api/v1/class`, data);
  }
}

export class StatisticsService {
  // replace ${classId} with classId later
  static getAttendances(classId) {
    return axios.get(
      `http://localhost:3001/api/v1/statistics/attendances/${classId}`
    );
  }

  static getHomework(classId) {
    return axios.get(
      `http://localhost:3001/api/v1/statistics/homework/${classId}`
    );
  }

  static getPeriodicTests(classId) {
    return axios.get(`http://localhost:3001/api/v1/statistics/tests/${classId}`);
  }

  static postAttendances(classId, attendances) {
    return axios.post(`http://localhost:3001/api/v1/statistics/attendances/${classId}`, {
      attendances
    })
  }

  static postPeriodicTest(classId, tests) {
    return axios.post(
      `http://localhost:3001/api/v1/statistics/tests/${classId}`, {
        tests,
      }
    );
  }

  static postHomeworkTest(classId, homeworks) {
    return axios.post(
      `http://localhost:3001/api/v1/statistics/homework/${classId}`, {
        homeworks,
      }
    );
  }

  static deleteAttendance(classId, date) {
    return axios.delete(
      `http://localhost:3001/api/v1/statistics/attendances/${classId}`, {
        data: {
          date
        }
      }
    );
  }

  static deletePeriodicTest(classId, date) {
    return axios.delete(
      `http://localhost:3001/api/v1/statistics/tests/${classId}`, {
        data: {
          date
        }
      }
    );
  }

  static deleteHomework(classId, date) {
    return axios.delete(
      `http://localhost:3001/api/v1/statistics/homework/${classId}`, {
        data: {
          date
        }
      }
    );
  }
}

export class TestsService {
  static getHomework(classId) {
    return axios.get(`http://localhost:3001/api/v1/tests/homework/${classId}`);
  }

  static getPeriodicTests(classId) {
    return axios.get(
      `http://localhost:3001/api/v1/tests/periodic-tests/${classId}`
    );
  }
}

//Teacher:
export class TeacherService {
  static getAll() {
    return axios.get(`http://localhost:3001/api/v1/teacher`);
  }
  static get(id) {
    return axios.get(`http://localhost:3001/api/v1/teacher/${id}`);
  }
}