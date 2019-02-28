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
        let score = Math.ceil(Math.random() * 20);
        student.grade += score - 10;
        let statement = `${student.name} receives a score of ${score}/10 on ${subject}` + 
            ` from ${this.name}`;
        console.log(statement);
        console.log(`${student.name} has a grade of ${student.grade}`)
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
        this.grade = Math.ceil(Math.random() * 50) + 50;
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
    
    graduate(){
        let grad = this.grade > 70;
        if (grad){
            console.log(`\nCongrats! ${this.name}, you graduated!!!`);
        } else {
            console.log(`\nSorry ${this.name}, You better go back and hit the books.`);
        }

        return grad;
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
        name: 'Fried',
        location: 'Wherever man',
        age: 27,
        gender: 'male',
        favLanguage: 'English',
        specialty: 'yeah',
        catchPhrase: `What are we doin again?`,
        gradClassName: `CS 420`, 
        favInstructor: `Cheech`
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
    phred.grade(fendi, 'Java');
    let attempts = 0
    while(!fendi.graduate() && attempts < 10){
        phred.grade(fendi, 'Java');
        attempts ++;
    }
    if (attempts >= 10){
        console.log(`\n\n\nFendi dropped out cause she couldn't pass`);
        console.log(`Dont be like Fendi keep going until you graduate\n\n\n`)
    }

}

demoCode();