console.log("Whats Up!")

//Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

const mustang = {
    Make: "Ford",
    Model: "Mustang",
    Year: "2015",
    Color: "Red",
}

//Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

const animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

const brian = {
    age: "31",
    height: "5'10",
    gender: "male"
}
const derick = {
    age: "32",
    height: "5'8",
    gender: "male"
}
const spyke = {
    age: "72",
    height: "5'8",
    gender: "male"
}
const wanda = {
    age: "64",
    height: "5'",
    gender: "female"
}
const familyMembers=[brian,derick,spyke,wanda]
console.log ("family members array",familyMembers)




const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
    let stories = "stories"
    let add = "address"
    let con_date = "constrctionDate"
    let owner = "owner"
    let  arch = "architect"

//Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

console.log(empireStateBuilding.stories, empireStateBuilding.height, empireStateBuilding.squareFeet, empireStateBuilding.constructionDate, empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength) 

console.log(empireStateBuilding[stories], empireStateBuilding[add],empireStateBuilding[con_date],empireStateBuilding[owner],empireStateBuilding[arch])
//"squareFeet", "constructionDate", "cost", "eastWestLength", "northSouthLength"])

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}


let partTime = nashvilleSoftwareSchool.instructors.partTime
// for (let i = 0; i < partTime.length; i++){
    // console.log(partTime[i])
    // document.querySelector(".part_time_list").innerHTML += `<li>${partTime[i]}<li>`
// }

let fullTime = nashvilleSoftwareSchool.instructors.fullTime
// for (let i = 0; i < fullTime.length; i++){
    // console.log(fullTime[i])
    // 
    function printInstructors(instructorsArr, element){
        for ( let i = 0; i < instructorsArr.length; i++) {
            document.querySelector(element).innerHTML += `<li>${instructorsArr[i]}<li>`
        }
    }
const sectionE1 = do

printInstructors(partTime, ".part_time_list")
printInstructors(fullTime, ".full_time_list")