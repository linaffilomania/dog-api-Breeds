const ImageBreed = ({dogImg}:{dogImg:[]}) => (

    <div>
        {dogImg.map((imgUrl, index) => (
            <img key={index} src={imgUrl}  width="200"/>
        ))}
    </div>
)
export default ImageBreed