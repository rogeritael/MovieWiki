import { useDataStore } from "../../services/stores/dataStore";
import { ScreenScrollContainer } from "../../components/Container";
import { Hero } from "../../components/Hero";
import { GoBack } from "../../components/GoBack";
import { CustomText } from "../../components/CustomText";

export function Detail(){
    const { selectedData } = useDataStore()
    return(
        <ScreenScrollContainer>
            <Hero
                item={selectedData}
                onDetailPage
            />
            <CustomText ml={24} size={18}>
                Descrição
            </CustomText>
            <CustomText ml={24} mr={24} mt={12} lh={20} size={14} weight={400}>
                {selectedData.description}
            </CustomText>
            <GoBack />
        </ScreenScrollContainer>
    )
}