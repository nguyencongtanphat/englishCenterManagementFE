import React from 'react'

export default function TeacherIcon(props) {
  return (
    <div  id={props.id}>
        <svg width="20" height="16.2" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M7.80004 13.6C7.71042 13.6 7.62079 13.6131 7.53529 13.6409C7.04929 13.7987 6.53817 13.9 6.00005 13.9C5.46192 13.9 4.9508 13.7987 4.46443 13.6409C4.37892 13.6131 4.28968 13.6 4.20005 13.6C1.87281 13.6 -0.0123144 15.493 6.05803e-05 17.8232C0.00531057 18.808 0.814933 19.6 1.80006 19.6H10.2C11.1852 19.6 11.9948 18.808 12 17.8232C12.0124 15.493 10.1273 13.6 7.80004 13.6ZM6.00005 12.4C7.98829 12.4 9.60004 10.7882 9.60004 8.8C9.60004 6.81176 7.98829 5.20001 6.00005 5.20001C4.0118 5.20001 2.40005 6.81176 2.40005 8.8C2.40005 10.7882 4.0118 12.4 6.00005 12.4ZM22.2 0.400024H7.80004C6.80742 0.400024 6.00005 1.2344 6.00005 2.25964V4.00002C6.87829 4.00002 7.69129 4.25427 8.40004 4.66751V2.80002H21.6V13.6H19.2V11.2H14.4V13.6H11.541C12.2573 14.2259 12.783 15.0524 13.0294 16H22.2C23.1926 16 24 15.1656 24 14.1404V2.25964C24 1.2344 23.1926 0.400024 22.2 0.400024Z" fill={props.color}/>
        </svg>
    </div>
  )
}
