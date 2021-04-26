import React from 'react'
import Layout from '../components/Layout'
import { withRouter } from 'next/router'

function post({ router }) {
    
    const title = router.query.title

    return (
        <Layout title={title}>
            <p style={{ width: '80vh' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos odio illo delectus sapiente, atque repellendus, laborum ipsum perspiciatis saepe rem totam consequatur exercitationem! In, minima quisquam! Placeat pariatur, facilis nihil voluptate laboriosam repellendus animi dolorem inventore sit molestias. Similique rerum, mollitia labore veniam aliquid consequuntur accusantium doloribus ducimus! Voluptatum ratione expedita alias ipsum, beatae illo eius cum exercitationem sit libero voluptas veritatis laboriosam eum et omnis dolor, modi porro cumque quos possimus velit! Expedita consequuntur, distinctio fuga ipsam ducimus adipisci ipsa qui maiores voluptatum? Sequi illo, repudiandae unde quisquam explicabo incidunt qui deserunt doloremque est excepturi. Officia dolores repellendus amet.</p>
        </Layout>
    )
}

export default withRouter(post)
