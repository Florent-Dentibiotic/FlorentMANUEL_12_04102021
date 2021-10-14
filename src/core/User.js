import React from 'react'

export default class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: props.id,
            firstName: props.firstName,
            lastName: props.lastName,
            age: props.age,
            score: props.score,
        }
    }
}
