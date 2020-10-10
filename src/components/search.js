import React, { useEffect, useState } from 'react';
const Search= function ({employees, updateemployees}){
        const [ inputvalue, updateinput ] = useState("");
        useEffect (function(){
            const searchedemployees =
                inputvalue === ""
                ? employees 
                : employees.filter(function({name: {last}}){
                    return last.includes(inputvalue);
                })
            updateemployees (searchedemployees);
        }, [inputvalue,employees, updateemployees]);
        return(
            <input value  = {inputvalue} onChange={e => updateinput(e.target.value)}/>
        )
}
export default Search;