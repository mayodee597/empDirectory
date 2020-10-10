import React, { useState, useEffect } from "react";
const EmployeeTable =  function({employees}){
    const [sortedemployees, updatesortedemployees] = useState([]);
    useEffect(function(){
        return updatesortedemployees(employees);

    }, [employees]);
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>photo</th>
                        <th
                            onClick={
                                function(){
                                    const employeescopy = [...employees];
                                    const updatesort = employeescopy.sort(function(a, b){
                                        const namea= a.name.first;
                                        const nameb= b.name.first;
                                        if (namea < nameb){
                                            return -1
                                        } else if (namea > nameb){
                                            return 1
                                        }else{
                                            return 0
                                        }
                                        
                                    });
                                    updatesortedemployees(updatesort);
                                }
                            }
                        >first</th>
                        <th
                            onClick={
                                function(){
                                    const employeescopy = [...employees];
                                    const updatesort = employeescopy.sort(function(a, b){
                                        const namea= a.name.last;
                                        const nameb= b.name.last;
                                        if (namea < nameb){
                                            return -1
                                        } else if (namea > nameb){
                                            return 1
                                        }else{
                                            return 0
                                        }
                                        
                                    });
                                    updatesortedemployees(updatesort);
                                }
                            }
                        >last</th>
                        <th>phone</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            sortedemployees.map(function({
                                picture:{thumbnail},
                                name: {first, last},
                                email,
                                phone
                            }){
                                return(
                                    <tr>
                                        <td><img src={thumbnail} alt={thumbnail}/></td>
                                        <td>{first}</td>
                                        <td>{last}</td>
                                        <td>{email}</td>
                                        <td>{phone}</td>
                        
                                    </tr>
                                )
                            })
                        }
                </tbody>
            </table>
        </div>
    )

}
export default EmployeeTable;