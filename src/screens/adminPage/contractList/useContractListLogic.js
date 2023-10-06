import { useInput } from "../../../hooks/useInput";
import { useRequestData } from "../../../hooks/useRequestData";

export const useContractListLogic = () => {
    const { data, loading } = useRequestData("contracts")

    const [nameFilter, handleName] = useInput("");
    const [planType, handlePlan] = useInput("");

    const contractList = data?.length && data
        .filter(user => user.name?.toLowerCase().includes(nameFilter.toLowerCase()))
        .filter((contract) => {
            switch (planType) {
            case "1x-Mensal":
                return contract?.plan === "1x-Mensal";
            case "2x-Mensal":
                return contract?.plan === "2x-Mensal";
            case "3x-Mensal":
                return contract?.plan === "3x-Mensal";
            case "1x-Trimestral":
                return contract?.plan === "1x-Trimestral";
            case "2x-Trimestral":
                return contract?.plan === "2x-Trimestral";
            case "3x-Trimestral":
                return contract?.plan === "3x-Trimestral";
            case "1x-Semestral":
                return contract?.plan === "1x-Semestral";
            case "2x-Semestral":
                return contract?.plan === "2x-Semestral";
            case "3x-Semestral":
                return contract?.plan === "3x-Semestral";
            case "Avulsa":
                return contract?.plan === "Avulsa";
            case "Gympass":
                return contract?.plan === "Gympass";
            case "Totalpass":
                return contract?.plan === "Totalpass";
            default:
                return contract?.plan;
            }
        })

    return { contractList, loading, handleName, handlePlan }
}

