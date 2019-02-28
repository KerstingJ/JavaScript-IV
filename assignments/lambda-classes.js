// CODE here for your Lambda Classes

class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
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
        // dangerous tho cause you could overwrite other stuff unintentionally,
        // or introduce something you didnt want to be there
        //
        // constructor(attr){
        //     let keys = Object.keys(attr);
        //     keys.forEach( key => this[key] = attr[key]);
        // }

        let wantedAttr = [`gradClassName`, `favInstructor`];
        let keys = Object.keys(attr);
        keys.forEach( key => {
            if(wantedAttr.includes(key)){
                console.log(key);
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
function demoCode(){

    const fred = new Person({
        name: 'Fred',
        age: 37,
        location: 'Bedrock',
        gender: 'male'
    });

    const phred = new Instructor({
        name: 'Phred',
        location: 'Bedrock Heights',
        age: 27,
        gender: 'male',
        favLanguage: 'JavaScript',
        specialty: 'Front-end',
        catchPhrase: `Don't forget the homies`
    });

    const fried = new ProjectManager({
        name: 'Phred',
        location: 'Wherever man',
        age: 27,
        gender: 'male',
        favLanguage: 'English',
        specialty: 'yeah',
        catchPhrase: `What are we doin again?`,
        gradClassName: `CS 420`, 
        favInstructor: `Josh Knell`
    });

    const fendi = new Student({
        name: 'Fendi',
        location: 'Italy',
        age: 27,
        gender: 'female',
        previousBackground: `Fashion`,
        className: `WEB18`,
        favSubjects: [`CSS`, `HTML`, `Javascript`]
    });


    fred.speak();
    phred.speak();
    phred.demo(`ES Next`);
    fried.speak();
    fried.standUp(`WEB18_Fried`);
    fried.demo(`All The Things`);
    console.log(fried.favInstructor);
    fendi.speak();
    fendi.listsSubjects();

}

demoCode();