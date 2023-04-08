//1,2 
// console.log("preson1: shows ticket");
// console.log("preson2: shows ticket");

// const preMovie = async () => {
//     const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('ticket'), 3000)
//     });

//     const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`))
//     const addButter = new Promise((resolve, reject) => resolve(`butter`))
//     const getColdDrinks= new Promise((resolve, reject) => resolve(`colddrinks`))



//     let ticket = await promiseWifeBringingTicks;
    
//     console.log(`wife: i have the ${ticket}`)
//     console.log('husband: we should go in')
//     console.log('wife: no i am hungry');

//     let popcorn = await getPopcorn

//     console.log(`husband: i got some ${popcorn}`)
//     console.log('husband: we should go in');
//     console.log('wife: i need butter on my popcorn');

//     let butter = await addButter

//     console.log(`husband: i got some ${butter} on popcorn`)
//     console.log(`husband: anythinng else darling`)
//     console.log(`wife: i need a cold drink`)

//     let coldDrinks = await getColdDrinks
//     console.log(`husband: i got ${coldDrinks}`)
//     console.log(`wife: Lets got we are getting late`)
//     console.log(`husband: thank you for the reminder`)
    
//     return ticket
// }

// preMovie().then((m) => console.log(`person3: shows ${m}`))

// console.log("preson4: shows ticket");
// console.log("preson5: shows ticket");


// 3, 4
console.log("preson1: shows ticket");
console.log("preson2: shows ticket");

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000)
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`))
    const addButter = new Promise((resolve, reject) => resolve(`butter`))
    const getColdDrinks= new Promise((resolve, reject) => resolve(`colddrinks`))


    let ticket = await promiseWifeBringingTicks;
    let [popcorn, butter, colddrinks] = await Promise.all([getPopcorn, addButter, getColdDrinks])

    console.log(`${popcorn}, ${butter}, ${colddrinks}`)
    return ticket
}

preMovie().then((m) => console.log(`person3: shows ${m}`))

console.log("preson4: shows ticket");
console.log("preson5: shows ticket");

