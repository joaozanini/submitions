function gradingStudents(grades) {
    let adjustedGrades = [];

    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
        if (grade < 38) {
            adjustedGrades.push(grade);
        } else {
            let nextMultipleOfFive = Math.ceil(grade / 5) * 5;
            
            if (nextMultipleOfFive - grade < 3) {
                adjustedGrades.push(nextMultipleOfFive);
            } else {
                adjustedGrades.push(grade);
            }
        }
    }

    return adjustedGrades;
}
