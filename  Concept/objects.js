// Objects - they are complex data types - composite / complex data type
// key-value pair

let couse ={
    title : "Learn CSS Grid for free",
    lessons:15,
    creator: "sam",
    length: 63,
    difficultyLevel: 2,
    isFree: true,
    tags: ["CSS", "HTML"]
}

console.log(couse.length)
console.log(couse.title)
console.log(couse.tags)
console.log(couse["tags"]) // other way of accessing the object data
console.log(couse.tags[0])


let airbnbCastle ={
    title: "Live like a king",
    place:"Ireland",
    price: 120,
    isBooked :true,
    meals: ["Breakfast","Lunch", "Dinner"],
    discount: 10,
    sayHello: function(){
        console.log("Hello")
    }
}

console.log(airbnbCastle.place)
console.log(airbnbCastle.meals)
console.log(airbnbCastle.discount)
airbnbCastle.sayHello() // object with methods

