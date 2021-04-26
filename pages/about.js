import React, { Component } from 'react'
import Error from './_error'
import Layout from '../components/Layout'

class about extends Component {

    static async getInitialProps() {

        const res = await fetch('https://api.github.com/users/MHPHasan')
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json();

        return { user: data, statusCode}
    }

    render () {

        const { user, statusCode } = this.props

        if (statusCode) {
            return <Error statusCode={statusCode} />
        }

        return (
            <Layout title="About">
                <ul className="ul">
                    <li>User Name: {user.name}</li>
                    <li>User Location: {user.location}</li>
                    <li>Followers: {user.followers}</li>
                    <li>Following: {user.following}</li>
                </ul>
                <img src={user.avatar_url} alt="Me" height="200px" />

                <style jsx>{`
                    .ul {
                        list-style: none;
                        text-align: center;
                    }
                    .ul li:not(:last-child) {
                        margin-bottom: 10px;
                    }
                `}</style>
            </Layout>
        )
    }
}

export default about
