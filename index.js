var employee = {
    name: "jema",
    streetAddress: "nairobi"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newObject = { ...employee }
    newObject[key] = value;
    return newObject
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key, value) {
    let secondObject = { ...employee };
    delete secondObject[key]
    return secondObject
    
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    let thirdObject = {...employee}
    delete employee[key]
    return employee
    
}
