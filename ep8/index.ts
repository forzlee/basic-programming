const AboutMe = {
    Firstname: 'cherry',
    Lastname: 'vanilla',
    Age: 18,
    Tel: '063333333',
    Gender: 'female',
    Address: '77/7',
    Village: 7,
    Road: 'gardenangle',
    District: 'flower',
    Province: 'Bangkok',
    PostalCode: 45678,
    Mail: 'cherryjubjub@gmail.com',
    bestFriend: {
        bFriendName: 'Nanier',
        bLastName: 'jubjub',
        bTitle: 'baby'
    }
}

console.log(AboutMe.bestFriend.bTitle)

const myFriends = [{
    firstName: 'E',
    lastName: 'EEE',
    AKA: 'eiei',
    age: 20
}, {
    firstName: 'B',
    lastName: 'BBB',
    AKA: 'Bibi',
    age: 25
}, {
    firstName: 'K',
    lastName: 'KKK',
    AKA: 'kiki',
    age: 30
}]

const myFriendsAKA = myFriends.map(function (element, index) {
    return ({
        firstName: element.firstName,
        AKA: element.AKA
    })
})
console.log(myFriendsAKA)

const myFriendsMoreThan = myFriends.filter(function (element, index) {
    return element.age > 19
})

console.log(myFriendsMoreThan)


