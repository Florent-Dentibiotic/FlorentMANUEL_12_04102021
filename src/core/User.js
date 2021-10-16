// import React from 'react'

// export default class User extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             userId: props.id,
//             firstName: props.firstName,
//             lastName: props.lastName,
//             age: props.age,
//             score: props.score,
//         }
//     }
// }

export default class User {
    constructor(id, firstName, lastName, age, score) {
        this.userId = id
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.score = score
    }
}
