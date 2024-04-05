function generate_gender(){
    // working with decision structures
    let probabilityGender = Math.random()

    if (probabilityGender >= 0.48){
        return 'm'
    }else{
        return 'f'
    }

}

function generate_name(gender){
    // switch
    switch (gender.toLowerCase()){
        case 'm':
            return 'Charles Dickens'
        case 'f':
            return 'Ada Lovelace'
        default:
            console.log('ERROR')
    }
}

function generate_born(){
    // working with dates : born, calcule diff, sum date, random date etc...
    return new Date(2000,11,15)
}

function generate_wage(){
    return Math.floor(Math.random() * (1200, 9000 + 1)+1200 );
}

function generate_saving(wage, profile = 'neutral'){
    switch (profile){
        case 'neutral':
            let saving = Math.floor(wage*0.6);
            return saving;
    }
    
}

function build_person(){
    // Person attributes = born, gender, name, wage, saving == 0.6
    // Working with objects
    let person = new Object()
    person.bornDate = generate_born()
    person.gender = generate_gender()
    person.name = generate_name(person.gender)
    person.wage = generate_wage()
    person.saving = generate_saving(person.wage)

    return person
}