import React from 'react'
import User from '../core/User'

export default class UserMapper extends React.Component {
    static convertToUser(json) {
        return User({
            id: json.id,
            firstName: json.userInfos.firstName,
            lastName: json.userInfos.lastName,
            age: json.userInfos.age,
            score: json.userInfos.userScore,
        })
    }
}
