import { useDataStore } from "../../services/stores/dataStore";
import { ScreenScrollContainer } from "../../components/Container";
import { Hero } from "../../components/Hero";

export function Detail(){
    const { selectedData } = useDataStore()
    return(
        <ScreenScrollContainer>
            <Hero
                item={selectedData}
            />
        </ScreenScrollContainer>
    )
}