export type ResponseSuccess = {
    message: {
        [key: string]: string[];
    };
    status: string;
};

export type ResponseFail = {
    code: number;
    message: string;
    status: 'error';
};

export type DogImgResponse = ResponseSuccess | ResponseFail;

export type DogBreedResponse = {
    message: {
        [key: string]: string[];
    };
    status: string;
};
