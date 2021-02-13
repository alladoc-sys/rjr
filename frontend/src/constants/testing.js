

// db.table3.find( { $where: function() { return (this.english == this.science) }}).pretty();

// db.table3.find( { $where: function() { return (obj.english == obj.science)}}).pretty();
// >db.table3.find( "this.english == this.science").pretty();

// {
//     "_id" : ObjectId("52873b364038253faa4bbc0e"),
//     "student_id" : "STU002",
//     "sem" : "sem1",
//     "english" : "A",
//     "maths" : "A+",
//     "science" : "A"
// }
// {
//     "_id" : ObjectId("52873b5d4038253faa4bbc0f"),
//     "student_id" : "STU001",
//     "sem" : "sem1",
//     "english" : "A+",
//     "maths" : "A+",
//     "science" : "A"
// }
// {
//     "_id" : ObjectId("52873b7e4038253faa4bbc10"),
//     "student_id" : "STU003",
//     "sem" : "sem1",
//     "english" : "A+",
//     "maths" : "A",
//     "science" : "A+"
// }


