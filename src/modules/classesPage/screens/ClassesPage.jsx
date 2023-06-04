import React, { useEffect, useState } from 'react';
import ClassesTable from '../components/ClassesTable';
import {ClassService} from "../../../service.js";

function ClassesPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        ClassService.getAll()
        .then((res) => {
            setData(res.data.ResponseResult.Result);
        })
        .catch(err => console.log(err));
    }, []);
    
    return (
        <ClassesTable classes={data}/>
    )
}

export default  ClassesPage