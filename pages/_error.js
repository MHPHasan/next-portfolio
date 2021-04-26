import React from 'react'
import Layout from '../components/Layout'

function _error({statusCode}) {
    return (
        <Layout title="404!!!">
            {statusCode ? `Could not load your user data: Status Code ${statusCode}` : `Could't get that Page, Sorry!`}
        </Layout>
    )
}

export default _error
