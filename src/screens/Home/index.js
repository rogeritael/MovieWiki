import { Card } from "../../components/Card";
import { ScreenScrollContainer } from "../../components/Container";
import { Hero } from "../../components/Hero";
import { HomeList } from "../../components/HomeList";

const characters_mock = [
    {
        id: 0,
        image_url: 'https://sm.ign.com/t/ign_br/screenshot/default/darth-vader_5yvm.1200.jpg',
        title: 'Darth Vader',
        type: 'personagem',
        subtitle: 'Anakin Skywalker',
        description: 'Darth Vader, também conhecido como Anakin Skywalker, é um personagem fictício da franquia Star Wars. O personagem é o antagonista central da trilogia original e, como Anakin Skywalker, é o principal protagonista de toda a trilogia prequela. O criador de Star Wars, George Lucas, se referiu coletivamente aos seis primeiros filmes episódicos da franquia como "a tragédia de Anakin Skywalker".[1] Ele se tornou um dos vilões mais icônicos da cultura popular e foi listado entre os maiores vilões e personagens fictícios de todos os tempos.',
    },
    {
        id: 1,
        image_url: 'https://t.ctcdn.com.br/xj1bh94bEtMiyzl2G36mmgtos3Q=/1920x1080/smart/i722748.jpeg',
        title: 'Mestre Yoda',
        type: 'personagem',
        subtitle: 'Mestre dos Jedi',
        description: 'Darth Vader, também conhecido como Anakin Skywalker, é um personagem fictício da franquia Star Wars. O personagem é o antagonista central da trilogia original e, como Anakin Skywalker, é o principal protagonista de toda a trilogia prequela. O criador de Star Wars, George Lucas, se referiu coletivamente aos seis primeiros filmes episódicos da franquia como "a tragédia de Anakin Skywalker".[1] Ele se tornou um dos vilões mais icônicos da cultura popular e foi listado entre os maiores vilões e personagens fictícios de todos os tempos.',
    }
]

export function Home(){
    return(
        <ScreenScrollContainer>
            <Hero
                item={{
                    title: 'Episódio I',
                    subtitle: 'A ameaça fantasma',
                    type: 'filme',
                    image_url: 'https://forbes.com.br/wp-content/uploads/2021/04/ForbesLife_StarWars7_160421_Divulgac%CC%A7ao-768x512.jpg'
                }}
            />
            <HomeList data={characters_mock} title="Filmes"/>
            <HomeList data={characters_mock} title="Personagens"/>
        </ScreenScrollContainer>
    )
}