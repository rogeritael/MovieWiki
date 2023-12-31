import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { HomeList } from "../../components/HomeList";


export function Home(){
    return(
        <Container align='center' justify='center'>
            <HomeList />
        </Container>
    )
}