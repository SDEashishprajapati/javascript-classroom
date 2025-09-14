const student = {
    name: "Sumit",
    marks: 98,
    printDetails: function () {
        console.log("Student " + this.name + " has scored " + this.marks + " marks");
    }
}

student.printDetails();