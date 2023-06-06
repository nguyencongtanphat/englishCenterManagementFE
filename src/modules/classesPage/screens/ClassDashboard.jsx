import React, { useEffect, useState } from 'react'
import AppLineChart from '../../../globalComponents/LineChart'
import StudentCenterInfo from '../../homePage/components/StudentCenterInfo'
import ClassesStudentList from '../components/ClassesStudentList'
import StudentService, { ClassService } from "../../../service.js"
import { useParams } from 'react-router-dom';
import DatePicker from '../components/DatePicker'
import moment from "moment-timezone";


function ClassDashboard() {
    const [topStudents, setTopStudents] = useState([]);
    const [students, setStudents] = useState([]);
    const { classId } = useParams();
    const [date, setDate] = useState(null);
    const [month, setMonth] = useState(null);
    const [isPeriod, setIsPeriod] = useState(false);
    const [lineChartData, setLineChartData] = useState([]);
    const [selectValue, setSelectValue] = useState("Date");
    const [datesList, setDatesList] = useState([]);
    const [monthsList, setMonthsList] = useState([]);

    const [classIdDB, setClassIdDB] = useState("")
    const onChangeSelectedType = (newValue) => {
      console.log("here changed selected", newValue);
      if (newValue === "Period") {
        setIsPeriod(true);
      }
      setSelectValue(newValue);
    };
    const onChangeSelectedDate = (newValue) => {
      console.log("date selected:", newValue[0]);
      const dateString = moment(newValue[0])
        .tz("Asia/Ho_Chi_Minh")
        .format("YYYY-MM-DD");
      console.log("dateString:", dateString);
      setMonth(null);
      setIsPeriod(false);
      setDate(dateString);
    };
    const onChangeSelectedMonth = (newValue) => {
      setDate(null);
      setIsPeriod(false);
      console.log("new month:", newValue);
      setMonth(newValue);
    };
   

    //load dates months
    useEffect(()=>{
      const loadData = async ()=>{
        //find class by classID
        const classInfo = await ClassService.getClassInfo(classId);
        console.log("classInfo", classInfo._id);
        setClassIdDB(classInfo._id);

        const { dates, months } = await ClassService.getDateClass(
          classInfo._id
        );
        console.log("date list :", dates, months);
        setDatesList(dates);
        setMonthsList(months);
        //set defaut value for date
        setDate(dates[0]);
      }
      loadData()
    },[classId])

    //load chart data
    useEffect(()=>{
        const getClassDataChart = async() => {
            try{
                if(classIdDB!==""){
                    console.log("line chart loaded");
                    const lineChartData = await ClassService.getLineChartData(
                      {month: month, date: date, year:2023, isPeriod: isPeriod, classId:classIdDB}
                    );

                    console.log("class line chart:", lineChartData);
                    setLineChartData(lineChartData)
                    const pieChartData = await ClassService.getPieChartData({
                      month: month,
                      date: date,
                      year: 2023,
                      isPeriod: isPeriod,
                      classId: classIdDB,
                    });
                    console.log("pie chart data:", pieChartData);
                }
              
            }catch(e){
              console.log("error: ", e);
            }
        }
        getClassDataChart()
    },[classIdDB, date, isPeriod, month])
    
    useEffect(() => {
        StudentService.getStudentReportOverviewByClass(classId)
        .then((res) => {
            console.log('Student List: ',res.data.ResponseResult.Result);
            setStudents(res.data.ResponseResult.Result);
        })
        .catch(err => console.log(err));

        // GetTopStudent
        StudentService.getTopStudents({classid: classId.classId})
        .then((res) => {
            console.log('Top Student List: ',res.data.ResponseResult.Result);
            setTopStudents(res.data.ResponseResult.Result);
        })
        .catch(err => console.log(err));
    }, [classId]);

    if (!Array.isArray(students)) {
        return <div>Invalid student data</div>;
    }

    return (
      <>
        <div
          style={{
            backgroundColor: "#F9FAFB",
            borderRadius: "10px",
            marginTop: "10px",
            marginLeft: "12px",
          }}
        >
          <div
            style={{
              borderRadius: "16px",
              padding: "24px",
              backgroundColor: "white",
              marginBottom: "16px",
              boxShadow:
                "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <ClassesStudentList std={students} />
          </div>
          <div>
            <AppLineChart data={lineChartData} />
            <StudentCenterInfo topStudents={topStudents} />
            <DatePicker
              onChangeSelectedType={onChangeSelectedType}
              onChangeSelectedDate={onChangeSelectedDate}
              onChangeSelectedMonth={onChangeSelectedMonth}
              datesList={datesList}
              monthsList={monthsList}
            />
          </div>
        </div>
      </>
    );
}

export default ClassDashboard