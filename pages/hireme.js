import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

function hireme() {
    return (
        <Layout title="Hire Me">
            <p>you can hire me at{"   "}<a href="mailto:md@gmail.com">md@gmail.com</a></p>
            <Link href="/"><a>Go To Home</a></Link>
        </Layout>
    )
}

export default hireme
