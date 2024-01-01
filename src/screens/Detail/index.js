import { useDataStore } from "../../services/stores/dataStore";
import { ScreenScrollContainer } from "../../components/Container";
import { Hero } from "../../components/Hero";
import { GoBack } from "../../components/GoBack";

export function Detail(){
    const { selectedData } = useDataStore()
    return(
        <ScreenScrollContainer>
            <Hero
                item={selectedData}
                onDetailPage
            />
            <GoBack />
        </ScreenScrollContainer>
    )
}