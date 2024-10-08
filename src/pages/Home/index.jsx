import Card from '../../components/Card'
import Banner from '../../components/Banner'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/index'
import styles from '../Home/Home.module.css'
import React from 'react'

const Home = () => {
    const { logementsList, isLoading, error } = useFetch("/datas/logements.json");

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    if (isLoading) {
        return (
            <div className={styles.containerLoader}>
                <Loader />
            </div>
        );

    }

    return (
        <div>
            <div className={styles.containerBanner}>
                <Banner
                    image='./assets/img/IMG_BANNER.png'
                    alt='Falaises en bord de mer'
                    page="home"
                />
            </div>

            <div className={styles.containerLogements}>
                {logementsList.map((logement, index) => (
                    <Card
                        key={`${logement.name}-${index}`}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                ))}
            </div>
        </div>
    )

}

export default Home