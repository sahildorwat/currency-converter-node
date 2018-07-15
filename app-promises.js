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


getUser(1).then(user => console.log(user)).catch(e => console.log(e) )