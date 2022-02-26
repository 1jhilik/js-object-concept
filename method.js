const student = {
id: 101,
money: 5000,
name: 'RJ Kibria',
major: 'mathematics',
subjects: ['english', 'economics', 'math 101', 'calculus'],
bestFriend: {
    name: 'kunduu',
    major: 'mathematics'
},
takeExam: function(){
console.log(this.name,'taking Exam');
},
treatDey: function(expences){
this.money = this.money -expences;
return this.money;
}

}
student.takeExam();
const remaining = student.treatDey(900);
console.log(remaining);