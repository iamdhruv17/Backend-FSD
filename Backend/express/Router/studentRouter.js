import express from "express";
const router = express.Router();
// router.use(express.json())

/*app.get("/",(req,res)=>{
    res.send("Home");
});
*/

router.get("/About",(req,res)=>{
    res.send("About");
});

router.get("/Contact",(req,res)=>{
    res.send("Contact");
});



let students = [
    {
        id: 1,
        name: "John",
        age: 20,
        course: "CS"
    },
    {
        id: 2,
        name: "Doe",
        age: 25,
        course: "ECE"
    }
]

router.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const stud = students.find(students => students.id === id);
    if (!stud) {
        res.status(404).json({
            message: "Student not found"
        });
    }
    res.json(stud);
});

router.post("/students", (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    }
    students.push(newStudent)
    res.status(201).json({
        message: "Student created succesfuly",
        student: newStudent
    })

})
router.delete("students", (res, req) => {
    const id = parseInt(req.parms.id);
    const index = students.find(student => student.id === id);
    if (index === -1) {
        res.status(404).json({
            message: "Student not found"
        });
    }
    students.splice(index, 1);
    res.status(200).json({
        messsage: "Student deleted"
    });
});



router.patch("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const stud = students.find(student => student.id === id)
    if (!stud) {
        res.status(404).json({
            message: "Student not found"
        })
    }
    if (req.body.name !== undefined) {
        stud.name = req.body.name;
    }
    if (req.body.age !== undefined) {
    stud.age = req.body.age;
}
    if(req.body.course !== undefined) {
    stud.course = req.body.course;
}
res.status(200).json({
         message:"Student updated",
         student:stud
     })
});


export default router;