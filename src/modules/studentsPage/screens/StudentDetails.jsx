import React, { useState } from "react";
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
import styled from "../components/styleStd.module.css"
import AppLineChart from "../components/LineChart"
import { Badge, Button, Dropdown, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/fontawesome-free-solid";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import StudentService from '../../../service.js';
import Flatpickr from "react-flatpickr";

const filterTypeOption = {
    daily: "Daily",
    monthly: "Monthly",
    total: "Total"
}

function ClassesAdd() {
    // STUDIED DATE
    const [datesList, setDatesList] = useState([])
    const [monthsList, setMonthsList] = useState([])
    const [stdInfo, setStdInfo] = useState({});
    const [filterType, setFilterType] = useState(filterTypeOption.monthly);
    const [reportInfo, setReportInfo] = useState({});
    const [chartData, setChartData] = useState([]);
    const [chartMean, setChartMean] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [visibleDate, setVisibilityDate] = useState(true);
    const [visibleMonth, setVisibilityMonth] = useState(false);
    // FILTER OPTION
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedMonth, setSelectedMonth] = useState((new Date().getMonth()) + 1);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    let { studentId } = useParams();
    console.log('StudentID: ',studentId);

    // GET INITIAL DATA 
    useEffect(() => {
        retrieveStudentDetails(studentId);

        // Get Current Month
        let today = new Date()
        let month = today.getMonth() + 1
        let year = today.getFullYear()
        retrieveStudentReport({studentId, month, year})

        // Get studied Date
        getStudiedDate(studentId)

        setLoading(false)
    }, []);
    
    const retrieveStudentDetails = (id) => {
        StudentService.get(id)
        .then(response => {
            console.log('Student Details: ',response.data.ResponseResult.Result);
            setStdInfo(response.data.ResponseResult.Result);
        })
        .catch(e => {
            console.log('Error: ',e);
        });
    }
    const getStudiedDate = (id) => {
        StudentService.getStudiedDate(id)
        .then(response => {
            setDatesList(response.data.ResponseResult.Result.Date)
            setMonthsList(response.data.ResponseResult.Result.Month)
        })
        .catch(e => {
            console.log('Error: ',e);
        });
    }

    // STUDENT REPORT INFO
    useEffect(() => {
        if(filterType === filterTypeOption.daily){
            retrieveStudentReport({studentId, date:selectedDate})
        }else if(filterType === filterTypeOption.monthly){
            console.log("hehehe: ", selectedYear)
            retrieveStudentReport({studentId, month: selectedMonth, year: selectedYear})
        }else if(filterType === filterTypeOption.total){
            retrieveStudentReportTotal()
        }

    }, [filterType, selectedDate, selectedMonth]);

    useEffect(() => {
        let data = []
        try{
            console.log(reportInfo)
            if(filterType === filterTypeOption.daily || filterType === filterTypeOption.monthly ){
                reportInfo.Reports?.map(report => {
                    let rep = {
                        name: report.Date.slice(0, 10),
                        score: getTotalPercent(0, 0, report.HomeworkScore, report.HomeworkScoreRequired, report.TestScore, report.TestScoreRequired)
                    }
                    data.push(rep)
                })
                if(filterType === filterTypeOption.daily)
                    setChartMean({name: selectedDate})
            }
            else if(filterType === filterTypeOption.total){
                reportInfo.Reports?.map(report => {
                    let rep = {
                        name: report._id.Month.toString() + "/" + report._id.Year.toString(),
                        score:  getTotalPercent(0, 0, report.HomeworkScore, report.HomeworkScoreRequired, report.TestScore, report.TestScoreRequired)
                    }
                    data.push(rep)
                })
                
            }
            
            setChartData(data)
        }catch(e){
            console.log("Error: ", e)
        }
    }, [reportInfo]);

    const retrieveStudentReport = ({studentId, month, year, date} = {}) => {
        StudentService.getStudentReportDailyMonthly({studentId, month, year, date})
        .then(response => {
            setReportInfo(response.data.ResponseResult.Result);
        })
        .catch(e => {
            console.log('Error: ',e);
        });
    }
    const retrieveStudentReportTotal = () => {
        StudentService.getStudentReportTotal(studentId)
        .then(response => {
            setReportInfo(response.data.ResponseResult.Result);
        })
        .catch(e => {
            console.log('Error: ',e);
        });
    }
    const retrieveFilterType = (type) => {
        setFilterType(type)
    }
    const retrieveSelectedDate = (date) => {
        setSelectedDate(date)
    }

    // Filter Type
    const [selectValue, setSelectValue] = React.useState("Date");
    const onChange = (event) => {
      const value = event.target.value;
      setSelectValue(value);
      if (value==="Date"){
        setVisibilityDate(true); setVisibilityMonth(false);
      } else 
        if (value==="Month"){
            setVisibilityDate(false); setVisibilityMonth(true);
        } else 
            { 
                setVisibilityDate(false); 
                setVisibilityMonth(false); 
                retrieveFilterType(filterTypeOption.total)
            }
    };


    if(!isLoading)
    return(
        <div className="mx-3" style={{fontSize: "14px"}}>
            <Stack direction="horizontal" gap={2} className="mt-3">
                <Link key="Home" to="/" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Home</Link>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-3"
                    style={{ fontSize: "10px", color: "#888" }}></FontAwesomeIcon>
                <Link key="Home" to="/students" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Student List</Link>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-3"
                    style={{ fontSize: "10px", color: "#888" }}></FontAwesomeIcon>
                <Link key="Home" to="" className="me-3" style={{textDecoration: "none", color: "#1B64F2", fontSize: "14px" }}>Student Details</Link>
            </Stack>

            {/* Filter Type */}
            <div className={`${styled['filterTime']}`}> 
                <select onChange={onChange} className={`${styled['dropDown']}`}>
                    <option defaultValue value="Date">Date</option>
                    <option value="Month">Month</option>
                    <option value="Period">Period</option>
                </select>

                {visibleDate && (
                    <Flatpickr
                    style={{ width: "90px" }}
                    value={selectedDate}
                    options={{
                        enable: datesList,
                        maxDate: datesList[datesList.length - 1],
                        minDate: datesList[0],
                        mode: "single",
                    }}
                    onChange={retrieveSelectedDate}
                    />
                )}

                {visibleMonth &&
                <select name="Month" lassName={`${styled['filedDateMonth']}`} onChange={(e) => {
                    let selectedTimeArr = e.currentTarget.value.split('/')
                    setSelectedMonth(selectedTimeArr[0])
                    setSelectedYear(selectedTimeArr[1])
                    retrieveFilterType(filterTypeOption.monthly)
                    }} 
                >
                    {monthsList.map((month) => <option value={month}>{month}</option>)}
                </select>
                }
            </div>
            {/* Filter Type */}

            <h3 className="mb-3"><b>{stdInfo.Name}</b></h3>
            {/* //body */}
            <div className={styled['container']}>
                {/* above */}
                <div className={`${styled['container_above']}`}>
                    <div className={`${styled['details1']}`}>
                        <p style={{fontSize: "20px", fontWeight: 600}}>Information</p>
                        <div className={`${styled['avt_details']}`}>
                            <Image src={stdInfo.ImageURL} roundedCircle="true" width="64px" height="64px"></Image>
                            <div className={`${styled['name_details']}`}>
                                <label style={{fontSize: "16px", fontWeight: "600"}}>{stdInfo.Name}</label>
                                <label style={{color: "#6B7280"}}>ID: {stdInfo.StudentID}</label>
                            </div>
                        </div>
                        <div className={`${styled['alot_details']}`}>
                            <div className={`${styled['icon_label']}`}>
                                <FontAwesomeIcon icon="fa-solid fa-calendar" style={{color: "#6B7280"}} />
                                <label style={{color: "#6B7280"}}>{stdInfo.DateOfBirthday}</label>
                            </div>
                            <div className={`${styled['icon_label']}`}>
                                <FontAwesomeIcon icon="fa-solid fa-phone" style={{color: "#6B7280"}} />
                                <label style={{color: "#6B7280"}}>{stdInfo.PhoneNumber}</label>
                            </div>
                            <div className={`${styled['icon_label']}`}>
                                <FontAwesomeIcon icon="fa-solid fa-envelope" style={{color: "#6B7280"}} />
                                <label style={{color: "#6B7280"}}>{stdInfo.Email}</label>
                            </div>
                            <div className={`${styled['icon_label']}`}>
                                <FontAwesomeIcon icon="fa-solid fa-book-open" style={{color: "#6B7280"}} />
                                <label style={{color: "#6B7280"}}>{stdInfo.NameClass}</label>
                            </div>
                            <div className={`${styled['score']}`}>
                                <div className={`${styled['incom']}`}>
                                    <label style={{color: "#6B7280"}}>Income</label>
                                    <label style={{color: "#6B7280", fontSize: "24px"}}>{stdInfo.ScoreIncome}</label>
                                </div>

                                <div>
                                    <div className={`${styled['divider']}`}></div>
                                </div>

                                <div className={`${styled['desire']}`}>
                                    <label style={{color: "#6B7280"}}>Desire</label>
                                    <label style={{color: "#6B7280", fontSize: "24px"}}>{stdInfo.ScoreDesire}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styled['details2']}`}>
                        <p style={{fontSize: "20px", fontWeight: 600}}>Study Process</p>
                        <div className={`${styled['score_details']}`}>
                            <div className={`${styled['item1']}`}>
                                <div className={`${styled['detailss']}`}>
                                    <label style={{fontSize: "12px", color: "#6B7280"}}>Attendance</label>
                                    <div>
                                        <label style={{fontSize: "16px", fontWeight:400}}>Present:</label>
                                        <label style={{fontSize: "16px", fontWeight:600, marginLeft: "4px"}}>
                                            {(filterType === filterTypeOption.monthly || filterType === filterTypeOption.total) &&
                                            <>{reportInfo.Result?.TotalAttented}/{reportInfo.Result?.TotalReport} lessons </>
                                            }
                                            {(filterType === filterTypeOption.daily) &&
                                                <>{
                                                reportInfo.Result?.Attendance === true ? "Attended" : (
                                                    reportInfo.Result?.Attendance === false ? "Absent" : " - " 
                                                )
                                                }
                                                </>
                                            }
                                            
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label style={{fontSize: "16px", fontWeight:600, marginLeft: "4px"}}>
                                        {(filterType === filterTypeOption.monthly || filterType === filterTypeOption.total) &&
                                            <>{ getPercent(reportInfo.Result?.TotalAttented, reportInfo.Result?.TotalReport)}% </>
                                        }
                                        {(filterType === filterTypeOption.daily) &&
                                           <></>
                                        }
                                    </label>
                                </div>
                            </div>

                            <div className={`${styled['border_item']}`}></div>

                            <div className={`${styled['item1']}`}>
                                <div className={`${styled['detailss']}`}>
                                    <label style={{fontSize: "12px", color: "#6B7280"}}>Periodic tests</label>
                                    <div>
                                        <label style={{fontSize: "16px", fontWeight:400}}>Score:</label>
                                        <label style={{fontSize: "16px", fontWeight:600, marginLeft: "4px"}}>
                                            
                                            {(filterType === filterTypeOption.monthly || filterType === filterTypeOption.total) &&
                                            <>{reportInfo.Result?.TotalTestScore}/{reportInfo?.Result?.TotalTestScoreRequired} points </>
                                            }
                                            {(filterType === filterTypeOption.daily) &&
                                            <>{reportInfo.Result?.TestScore !== -1 ? reportInfo.Result?.TestScore : 0} points</>
                                            }
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label style={{fontSize: "16px", fontWeight:600, marginLeft: "4px"}}>
                                        {(filterType === filterTypeOption.monthly || filterType === filterTypeOption.total) &&
                                            <>{ getPercent(reportInfo.Result?.TotalTestScore, reportInfo.Result?.TotalTestScoreRequired)}%</>
                                        }
                                        {(filterType === filterTypeOption.daily) &&
                                            <>{ getPercent(reportInfo.Result?.TestScore, 100)}%</>
                                        }
                                    </label>
                                </div>
                            </div>
                            
                            <div className={`${styled['border_item']}`}></div>

                            <div className={`${styled['item1']}`}>
                                <div className={`${styled['detailss']}`}>
                                    <label style={{fontSize: "12px", color: "#6B7280"}}>Homework</label>
                                    <div>
                                        <label style={{fontSize: "16px", fontWeight:400}}>Score:</label>
                                        <label style={{fontSize: "16px", fontWeight:600, marginLeft: "4px"}}>
                                            
                                            {(filterType === filterTypeOption.monthly || filterType === filterTypeOption.total) &&
                                                <>{reportInfo.Result?.TotalHomeworkScore}/{reportInfo.Result?.TotalHomeworkScoreRequired} points </>
                                            }
                                            {(filterType === filterTypeOption.daily) &&
                                                <>{reportInfo.Result?.HomeworkScore !== -1 ? reportInfo.Result?.HomeworkScore : 0} points</>
                                            }
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label style={{fontSize: "16px", fontWeight:600, marginLeft: "4px"}}>
                                        {(filterType === filterTypeOption.monthly || filterType === filterTypeOption.total) &&
                                            <>{ getPercent(reportInfo.Result?.TotalHomeworkScore, reportInfo.Result?.TotalHomeworkScoreRequired)}%</>
                                        }
                                        {(filterType === filterTypeOption.daily) &&
                                            <>{ getPercent(reportInfo.Result?.HomeworkScore, 100)}%</>
                                        }
                                    </label>
                                </div>
                            </div>

                            <div className={`${styled['final_item']}`}>
                                <label style={{width: "223px", fontSize: "16px", fontWeight:400}}>Overall:</label>
                                <label style={{color: "#238723", textAlign: "right", fontSize: "24px", fontWeight: "600"}}>
                                    {(filterType === filterTypeOption.monthly || filterType === filterTypeOption.total) &&
                                        <>{getTotalPercent(reportInfo.Result?.TotalHomeworkScore, reportInfo.Result?.TotalHomeworkScoreRequired, reportInfo.Result?.TotalTestScore, reportInfo.Result?.TotalTestScoreRequired, reportInfo.Result?.TotalAttented, reportInfo.Result?.TotalReport).toString()}%</>
                                    }
                                    {(filterType === filterTypeOption.daily) &&
                                        <>{ getTotalPercent(0, 0, reportInfo.Result?.HomeworkScore, reportInfo.Result?.HomeworkScoreRequired , reportInfo.Result?.TestScore, reportInfo.Result?.TestScoreRequired)}%</>
                                    }
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={`${styled['details3']}`}>
                        <p style={{fontSize: "20px", fontWeight: 600}}>Evaluation & Suggestion</p>
                        <div className={`${styled['evaluation']}`}>
                            <label style={{width: "350px", fontSize: "16px", fontWeight:400}}>Evaluation:</label>
                            <h6><Badge pill bg="success">Good</Badge></h6>
                        </div>
                        <div className={`${styled['border_bottom']}`}></div>
                        <label style={{width: "350px", fontSize: "16px", fontWeight:400}}>Suggestion:</label>
                        <div>
                            <ul style={{color: "#6B7280", lineHeight: "168%"}}>
                                <li>Should do their homework harder and more carefully.</li>
                                <li>Further improve reading skills by learning more vocabulary and grammar.</li>
                                <li>Periodic tests have done very well. Should keep it like that.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* below */}
                <div className={`${styled['container_below']}`}>
                    <p style={{fontSize: "20px", fontWeight: 600}}>Overall</p>
                    <AppLineChart style={{fontSize: "14px"}} data={chartData} mean={chartMean}/>
                </div>
            </div>
        </div>
    );
}


function mathRound(number){
    return Math.round((number) * 100)/100
}

function getPercent(number, maxNumber){
    let percent = parseFloat((number / maxNumber)) * 100
    return (!percent || percent <0)  ?  "0" :  mathRound((parseFloat((number / maxNumber)) * 100)).toString()
}

function getPercentNumber(number, maxNumber){
    let percent = parseFloat((number / maxNumber)) * 100
    return (!percent || percent <0)  ?  0 :  mathRound((parseFloat((number / maxNumber)) * 100))
}

function getTotalPercent(n1, m1, n2, m2, n3, m3){
    n1 = (n1 < 0 || !n1) ? 0 : n1
    n2 = (n2 < 0 || !n2) ? 0 : n2
    n3 = (n3 < 0 || !n3) ? 0 : n3
    let total = 0, count = 0
    if(getPercentNumber(n1, m1) > 0){
        total += getPercentNumber(n1, m1)
        count ++
    }
    if(getPercentNumber(n2, m2) > 0){
        total +=  getPercentNumber(n2, m2)
        count ++
    }
    if(getPercentNumber(n3, m3) > 0){
        total +=  getPercentNumber(n3, m3)
        count ++
    }
    return (count > 0 ? mathRound(total/count) : 0)
}

export default ClassesAdd