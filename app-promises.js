const users = [ { id: 1 , name: 'sahil', schoolId: 101} , { id: 2 , name: 'sanika', schoolId: 102} ];
const grades = [{id: 1, schoolId: 101, grade: 86}, {id: 2, schoolId: 101, grade: 82}, {id: 3, schoolId: 102, grade: 89}];


const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const usr = users.find((user) => user.id === id)
        if(usr){
            return resolve(usr)
        }else {
            return reject('id not found')
        }
    })
} 

getStatus = (userId) => {
    let user;
    return getUser(userId).then( (tempUser) => {
        user = tempUser;
        return getGrades(user.schoolId).then((grades) => {
            let average = 0;
            if(grades.length > 0){
                average = grades.map( (grade ) => grade.grade ).reduce((a,b) => a + b) / grades.length;  
            }
            return `${user.name} has a ${average} % in the class`;
        })
    })
}

const getStatusAlt = async (userId) => {
    const user = await getUser(userId)
    const grades = await getGrades(user.schoolId)
    let average = 0;
    if(grades.length > 0){
        average = grades.map( (grade ) => grade.grade ).reduce((a,b) => a + b) / grades.length;  
    }
    return `${user.name} has a ${average} % in the class`;
}

getStatusAlt(3).then(ele => console.log(ele)).catch(e => console.log(e))

getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => {
            if(grade.schoolId === schoolId) {
                return grade.grade
            }
            
        }))
    })
}

// getStatus(1).then(a => console.log(a))
// getGrades(101).then(g => console.log(g))
// getUser(2).then(user => console.log(user)).catch(e => console.log(e) )