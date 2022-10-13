/*Create a functional component, which renders the name of the coworker, the in office status (in office or out of office) and a button.
The button should toggle the in office status of the coworker.
The data should come from the coworkers prop. The component should maintain its own state.
*/

import * as React from 'react';

const coworkers = [
  {first_name: 'Max', last_name: 'Mustermann'},
  {first_name: 'Vladimir', last_name: 'Leles'},
  {first_name: 'Tobias', last_name: 'Anhalt'},
];

const CoworkerList = (props) => {

  const [employeeInfo,setEmployeeInfo] = React.useState([]);
  const toggleEmployeeStatus = React.useCallback((empId,empStatus) => {
    let employeesCopy= [...employeeInfo];
    let employee = employeesCopy.find(({id})=> id === empId );
    employee = {...employee,status:empStatus === 'in' ? 'out' : 'in'}
    employeesCopy[empId]= {...employee}
    setEmployeeInfo([...employeesCopy])
  },[employeeInfo])
  React.useEffect(()=> {
    let finalRenderData = props.coworkers?.map((workerData,index)=> {
        return {
            ...workerData,
            status:'in',
            id:index
        }
    })
    setEmployeeInfo([...finalRenderData])
  },[props])
  return (<div style={{display:'flex',justifyContent:'space-between'}}>
    {employeeInfo?.map(({first_name,last_name,status,id,status})=>(
        <>
         <div>
         {first_name}{last_name}
     </div>
     <div>
        <button onClick={toggleEmployeeStatus(id,status)}>{status === 'in'? 'In Office' : 'Out Of Office'}</button>
     </div>
     </>
    ))

    }
   
  </div>)
};

export default CoworkerList;