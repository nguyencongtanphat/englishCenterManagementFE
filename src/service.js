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

  getStudentsByClass(classId) {
    return axios.get(`http://localhost:3001/api/v1/students?classId=IELTS90`)
  }

  getStudentReportOverview(){
    return axios.get(`http://localhost:3001/api/v1/student-report/total`)
  }

  getStudentReportDailyMonthly({studentId = null, month = null, year = null, date = null} = {}){
    let queryStr = ""
    if(month)
      queryStr += "&month=" + month
    if(year)
      queryStr += "&year=" + year
    if(date)
      queryStr += "&date=" + date
    return axios.get(`http://localhost:3001/api/v1/student-report/?studentid=`+ studentId + queryStr)
  }
  getStudentReportTotal(studentId){
    return axios.get(`http://localhost:3001/api/v1/student-report/monthly/`+ studentId)
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

