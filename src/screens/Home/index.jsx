import { Card } from "../../components/Card";
import { Container } from "../../components/Container";


export function Home(){
    return(
        <Container align='center' justify='center'>
            <Card item={{image_url: 'https://sm.ign.com/t/ign_br/screenshot/default/darth-vader_5yvm.1200.jpg'}}/>
        </Container>
    )
}