import { useState } from "react";
import ImageBreed from "./component/ImageBreed.tsx";
import Combobox from "./component/Combobox.tsx";
import { useFetch } from "./hooks/useFetch.tsx";
import { useFormatCombobox } from "./hooks/useFormatCombobox.tsx";
import { DogImgResponse, DogBreedResponse } from "./type.ts";

const Home = () => {
    const [selected, setSelected] = useState<string>('');
    let dogBreedFormat: string | any[] =[] ;

    const { data: dogBreed, isError: dogBreedError,isSuccess } = useFetch<DogBreedResponse>('https://dog.ceo/api/breeds/list/all', ['dogBreeds'], true);
    isSuccess && console.log('dogBreedFormat successfully.');
    if(dogBreed?.status === 'success'){
        dogBreedFormat = useFormatCombobox(dogBreed);
    }

    const { data: dogImg, isError: dogImgError, isLoading: isLoadingImg } =
        useFetch<DogImgResponse>(`https://dog.ceo/api/breed/${selected}/images`, ['dogImages', selected], !!selected);

    const handleChange = (value: string) => {
        setSelected(value);
    };

    return (
        <>
            {dogBreedError && <div>Error loading breeds.</div>}
            {dogImgError && <div>Error loading images.</div>}
            {isLoadingImg && <div>Loading images...</div>}
                <div className='combobox'>
                    <Combobox handleChange={handleChange} data={dogBreedFormat?.length > 0 ? dogBreedFormat :[]} />
                </div>

            {dogImg && dogImg.status === 'success' && <ImageBreed dogImg={dogImg.message} />}
        </>
    );
};

export default Home;
