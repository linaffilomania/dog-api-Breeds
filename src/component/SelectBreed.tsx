import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import ImageBreed from "./ImageBreed.tsx";
import Combobox from "./Combobox.tsx";

const SelectBreed = () => {
    const [selected, setSelected] = useState<string>('');

    const { data: dogBreed } = useQuery({
        queryKey: ['dogBreeds'],
        queryFn: () => fetch(`https://dog.ceo/api/breeds/list/all`).then(res => res.json())
    });
const handleChange = (value: string) => {
    setSelected(value);
}
    const { data: dogImg ,isError,isLoading} = useQuery({
        queryKey: ['dogImages', selected],
        queryFn: () => fetch(`https://dog.ceo/api/breed/${selected}/images`).then(res => res.json()),
        enabled: !!selected, // Ensures this query runs only if a breed is selected
    });
    isLoading && <div>is Loading ...</div>
    isError && <div>somting Worng ...</div>

    return(
        <>

    <Combobox handleChange={handleChange} data={dogBreed.message} />
            {dogImg && (<ImageBreed dogImg={dogImg}/>)}
        </>

    );
}
export default SelectBreed;