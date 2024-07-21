type ComboboxOptions = {
    handleChange: (value: string) => void;
    data:string[] | []
}
const Combobox = ({handleChange, data}:ComboboxOptions) => {
    return (
        <select
        name="dogs"
        id="dogs-select"
        onChange={(e) => handleChange(e.target.value)}
    >
        {data.map((breed: string) => (
            <option key={breed} value={breed}>{breed}</option>
        ))}
    </select>)
}
export default Combobox;