function employees(input) {
    let employees = [];

    for (let i = 0; i < input.length; i++) {
        employees.push(employee = {
            name: input[i],
            personalNumber: input[i].length
        });
    }

    for (const employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']); // Name: Silas Butler -- Personal Number: 12
