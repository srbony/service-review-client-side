import { useEffect } from "react"

const useTittle = title => {
    useEffect(() => {
        document.title = `${title} - Food Services`

    }, [title])
}
export default useTittle;