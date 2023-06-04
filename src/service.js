import axios from "axios";

const url = "http://localhost:3001/api/v1";

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
    return axios.get(
      `http://localhost:3001/api/v1/students?classId=${classId}`
    );
  }

  getStudentReportOverviewByClass(classId) {
    return axios.get(
      `http://localhost:3001/api/v1/student-report/total/${classId}`
    );
  }

  getStudentReportOverview() {
    return axios.get(`http://localhost:3001/api/v1/student-report/total`);
  }

  getTopStudents({ classid } = {}) {
    let urlString =
      "http://localhost:3001/api/v1/student-report/total/?istop=true";
    urlString = classid ? urlString + "&classid=" + classid : urlString;
    return axios.get(urlString);
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

  getStudiedDate(studentId) {
    return axios.get(
      `http://localhost:3001/api/v1/student-report/date/` + studentId
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

export class HomeService {
  static async getDateCenter() {
    try {
      const response = await axios.get(`${url}/center-report/date`);
      return response.data.ResponseResult.Result;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  static async getTopStudent() {
    try {
      const response = await axios.get(
        `${url}/student-report/total/?istop=true`
      );
      return response.data.ResponseResult.Result;
    } catch (e) {
      throw new Error(e.message);
    }
  }
  static async getClass() {
    try {
      const response = await axios.get(`${url}/class`);
      return response.data.ResponseResult.Result;
    } catch (e) {
      throw new Error(e.message);
    }
  }
  static async getPieChartData({
    month = null,
    date = null,
    isPeriod = null,
    year = 2023,
  } = {}) {
    try {
      console.log("getPieChartData month date", month, date);
      if (month) {
        console.log(
          "url pie chart month",
          `${url}/student-report/monthly/?month=${month}`
        );
        const response = await axios.get(
          `${url}/student-report/monthly/?month=${month}`
        );
        const reports = response.data.ResponseResult.Result.Reports;

        let goodNumber = 0;
        let mediumNumber = 0;
        let badNumber = 0;
        reports.forEach((report) => {
          if (report.TotalScore >= 80) goodNumber++;
          else if (report.TotalScore < 80 && report.TotalScore >= 65)
            mediumNumber++;
          else badNumber++;
        });
        const data = [
          { name: "Good", value: goodNumber },
          { name: "Medium", value: mediumNumber },
          { name: "Not-Good", value: badNumber },
        ];
        return data;
      } else if (date) {
        console.log("date here");
        // eslint-disable-next-line no-useless-concat
        console.log(
          "url pie chart date",
          `${url}/center-report` + "?date=" + date.slice(0, 10)
        );
        let currentReport;
        const response = await axios.get(
          `${url}/center-report` + "?date=" + date.slice(0, 10)
        );
        const reports = response.data.ResponseResult.Result.reports;
        reports.forEach((report) => {
          const reportDate = report.Date.slice(0, 10);
          date = date.slice(0, 10);
          console.log("current date", date, reportDate);
          if (reportDate === date) currentReport = report;
        });
        const data = [
          { name: "Good", value: currentReport["GoodLevel"] },
          { name: "Medium", value: currentReport["MediumLevel"] },
          { name: "Not-Good", value: currentReport["BadLevel"] },
        ];
        return data;
      }
    } catch (e) {
      throw new Error(e.message);
    }
  }
  static async getLineChartData({
    date = null,
    month = null,
    isPeriod = false,
  } = {}) {
    try {
      if (isPeriod) {
        console.log("url line chart", `${url}/center-report/monthly`);
        const response = await axios.get(`${url}/center-report/monthly`);
        const reports = response.data.ResponseResult.Result;
        const pieChart = reports.map((report) => {
          return {
            key: report["_id"]["Month"],
            value: report["AvgCenterScore"],
          };
        });
        return pieChart;
      } else {
        let query = "";
        if (date) query = "?date=" + date.slice(0, 10);
        if (month) query = "?month=" + month;
        if (isPeriod) query = "/monthly";
        console.log("url line chart", `${url}/center-report` + query);
        const response = await axios.get(`${url}/center-report` + query);
        const reports = response.data.ResponseResult.Result.reports;
        //extra data for line chart
        const lineChartData = reports.map((report) => {
          const dateReport = new Date(report.Date);
          return {
            key: `${dateReport.getDate().toString().padStart(2, "0")}/${(
              dateReport.getMonth() + 1
            )
              .toString()
              .padStart(2, "0")}/${dateReport.getFullYear().toString()}`,
            value: report.CenterScore,
          };
        });
        return lineChartData;
      }
    } catch (e) {
      throw new Error(e.message);
    }
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
    return axios.get(
      `http://localhost:3001/api/v1/statistics/tests/${classId}`
    );
  }

  static postAttendances(classId, attendances) {
    return axios.post(
      `http://localhost:3001/api/v1/statistics/attendances/${classId}`,
      {
        attendances,
      }
    );
  }

  static postAttendancesByScanning(classId, studentIds) {
    return axios.post(
      `http://localhost:3001/api/v1/statistics/attendances/${classId}/scan`,
      {
        studentIds,
      }
    );
  }

  static postPeriodicTest(classId, tests) {
    return axios.post(
      `http://localhost:3001/api/v1/statistics/tests/${classId}`,
      {
        tests,
      }
    );
  }

  static postHomeworkTest(classId, homeworks) {
    return axios.post(
      `http://localhost:3001/api/v1/statistics/homework/${classId}`,
      {
        homeworks,
      }
    );
  }

  static deleteAttendance(classId, date) {
    return axios.delete(
      `http://localhost:3001/api/v1/statistics/attendances/${classId}`,
      {
        data: {
          date,
        },
      }
    );
  }

  static deletePeriodicTest(classId, date) {
    return axios.delete(
      `http://localhost:3001/api/v1/statistics/tests/${classId}`,
      {
        data: {
          date,
        },
      }
    );
  }

  static deleteHomework(classId, date) {
    return axios.delete(
      `http://localhost:3001/api/v1/statistics/homework/${classId}`,
      {
        data: {
          date,
        },
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

  static addPeriodicTest(test) {
    return axios.post(`http://localhost:3001/api/v1/tests/periodic-tests/`, {
      ...test,
    });
  }
  static addHomeworkTest(test) {
    return axios.post(`http://localhost:3001/api/v1/tests/homework/`, {
      ...test,
    });
  }
}

export class TeacherService {
  static getAll() {
    return axios.get(`http://localhost:3001/api/v1/teacher`);
  }
  static get(id) {
    return axios.get(`http://localhost:3001/api/v1/teacher/${id}`);
  }
}
