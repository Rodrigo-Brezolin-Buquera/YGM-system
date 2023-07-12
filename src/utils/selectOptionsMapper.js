export const selectOptionsMapper = (list, key) => {


    return list?.map((i) => {
        return (
            <option key={i[key]} value={i[key]} >
                {i[key]}
            </option>
        )
    })
}