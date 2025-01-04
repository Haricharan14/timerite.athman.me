// Grade calculation constants
const GRADES = {
    S: { points: 10, cutoff: 90, remarks: '---' },
    A: { points: 9, cutoff: 80, remarks: '---' },
    B: { points: 8, cutoff: 70, remarks: '---' },
    C: { points: 7, cutoff: 60, remarks: '---' },
    D: { points: 6, cutoff: 50, remarks: '---' },
    E: { points: 4, cutoff: 40, remarks: '---' },
    U: { points: 0, cutoff: 0, remarks: '---' },
    P: { points: 0, cutoff: 0, remarks: 'Pass' },
    F: { points: 0, cutoff: 0, remarks: 'Fail' },
    W: { points: 0, cutoff: 0, remarks: 'Not eligible for end term' },
    I: { points: 0, cutoff: 0, remarks: 'Course incomplete' }
};

function determineGrade(finalScore) {
    if (finalScore >= GRADES.S.cutoff) return 'S';
    if (finalScore >= GRADES.A.cutoff) return 'A';
    if (finalScore >= GRADES.B.cutoff) return 'B';
    if (finalScore >= GRADES.C.cutoff) return 'C';
    if (finalScore >= GRADES.D.cutoff) return 'D';
    if (finalScore >= GRADES.E.cutoff) return 'E';
    return 'F';
}

function getGradeInfo(grade) {
    return GRADES[grade] || GRADES.F;
}

// Function to create and insert grade table
function insertGradeTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const table = document.createElement('table');
    table.className = 'grade-table';
    
    // Create header
    const header = table.createTHead();
    const headerRow = header.insertRow();
    ['Grade', 'Points', 'Cut-off', 'Remarks'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });

    // Create body
    const tbody = table.createTBody();
    Object.entries(GRADES).forEach(([grade, info]) => {
        const row = tbody.insertRow();
        [grade, info.points, info.cutoff, info.remarks].forEach(text => {
            const td = row.insertCell();
            td.textContent = text;
        });
    });

    container.appendChild(table);
}

// Export functions for use in other files
window.gradeCalculator = {
    determineGrade,
    getGradeInfo,
    insertGradeTable
};
