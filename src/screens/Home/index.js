import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Hero } from "../../components/Hero";
import { HomeList } from "../../components/HomeList";


export function Home(){
    return(
        <Container>
            <Hero />
            <HomeList />
        </Container>
    )
}