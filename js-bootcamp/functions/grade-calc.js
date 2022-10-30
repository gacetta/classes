// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const scoreFinder = function (studentScore, totalScore) {
    if (typeof studentScore !== 'number' || typeof totalScore !== 'number') {
        throw Error('Arguments must be numbers');
    }
    
    const percent = (studentScore / totalScore) * 100
    let grade = 'F'

    if (percent >= 90) {
        grade = 'A'
    } else if (percent >= 80) {
        grade = 'B'
    } else if (percent >= 70) {
        grade = 'C'
    } else if (percent >= 60) {
        grade = 'D'
    }
    
    return `${studentScore}/${totalScore} -> You got a ${grade} (${percent}%)!`
}


try {
    const gradeText = scoreFinder ('poop',1000)
    console.log(gradeText)
} catch (e) {
    console.log(e.message);
}