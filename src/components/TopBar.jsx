import Select from 'react-select'
export default function TopBar(){
    const options = [
        { value: 'region', label: 'Filter by Region' },
        { value: 'africa', label: 'Africa' },
        { value: 'america', label: 'America' },
        { value: 'asia', label: 'Asia' },
        { value: 'europe', label: 'Europe' },
        { value: 'oceania', label: 'Oceania' },
      ]

    return(

        <div className="top-bar">
            <div className="search">
                <input type="text" name="" id="" placeholder="Search for a country..." />
            </div>
            <div className="filter">
            <Select className='select' classNamePrefix='inner-select' options={options} />
            </div>
        </div>
    )
}