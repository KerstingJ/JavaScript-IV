// CODE here for your Lambda Classes

class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = `no assumptions`;
    }

    speak(){
        let statement = `Hello my name is ${this.name}, I am from ${this.location}`;
        console.log(statement);
    }
}

class Instructor extends Person{
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }

    demo(subject){
        let statement = `Today we are learning about ${subject}`;
        console.log(statement);
    }
    
    grade(student, subject){
        let statement = `${student.name} receives a perfect score on ${subject}`;
        console.log(statement);
    }
}

class ProjectManager extends Instructor{
    constructor(attr){
        super(attr);

        //this kind of logic could be cool for an object with a bunch of properties
        // minus the wantedAttr part. dangerous tho cause you could overwrite other stuff
        let wantedAttr = [`gradClassName`, `favInstructor`];
        let keys = Object.keys(attr);
        keys.forEach(function(key){
            if(wantedAttr.includes(key)){
                this[key] = attr[key];
            }
        });
    }

    standUp(channel){
        let statement = `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
        console.log(statement);
    }

    debugsCode(student, subject){
        let statement = `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

class Student extends Person{
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }

    listsSubjects(){
        this.favSubjects.forEach(subject => console.log(subject));
    }

    PRAssignment(subject){
        let statement = `${this.name} has submitted a PR for ${subject}`;
        console.log(statement);
    }

    sprintChallenge(subject){
        let statement = `${this.name} has begun sprint challenge on ${subject}`;
        console.log(statement);
    }
    
}