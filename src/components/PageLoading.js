import { CircularProgress } from "@chakra-ui/react";
import { Suspense } from "react";

export const PageLoading = ({children}) => {
    return (
        <Suspense
            fallback={
                <CircularProgress alignSelf={"center"} marginTop={"2em"} size='120px' isIndeterminate color="brand.200" />
            }>
            {children}
        </Suspense>
    )
}

export default PageLoading