import Head from 'next/head'
import styles from '../styles/Home.module.css'

function getData(url) {
    try {
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(json => {
                console.log('success', json)
            })
    } catch (e) {
        console.log('error...', e.message);
    }
}

export default function Home() {
    const clickPlaceholder = () => {
        getData('https://jsonplaceholder.typicode.com/users')
    }
    const click3001 = () => {
        getData('/api')
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
            </Head>
            <h1>Test page...</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda commodi illum iste laborum
                praesentium.</p>
            <div style={{display: 'flex', width: '300px', justifyContent: 'space-between'}}>
                <div>
                    <button onClick={clickPlaceholder}>json placeholders users</button>
                </div>
                <div>
                    <button onClick={click3001}>/api</button>
                </div>
            </div>
        </div>
    )
}
