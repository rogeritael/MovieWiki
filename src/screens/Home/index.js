import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Hero } from "../../components/Hero";
import { HomeList } from "../../components/HomeList";

const characters_mock = [
    {
        id: 0,
        image_url: 'https://sm.ign.com/t/ign_br/screenshot/default/darth-vader_5yvm.1200.jpg'
    },
    {
        id: 1,
        image_url: 'https://t.ctcdn.com.br/xj1bh94bEtMiyzl2G36mmgtos3Q=/1920x1080/smart/i722748.jpeg'
    }
]

export function Home(){
    return(
        <Container>
            <Hero />
            <HomeList data={characters_mock} title="Filmes"/>
            <HomeList data={characters_mock} title="Personagens"/>
        </Container>
    )
}