import React from 'react'
import Select from 'react-select'
export default function TopBar(prop){

      const customStyles = {
        option: (provided, state) => ({
          ...provided,
        //   color: state.isSelected ? ((prop.darkMode?'white':'white')) : '',
          color: state.isFocused ? 'black' : '',
        }),
      }



    return(

        <div className="top-bar">
            <div className="search">
                <input 
                onChange={(e)=>{
                  prop.handelSearch(e)

                }}
                value={prop.search}
                type="text" 
                name="search"
                 placeholder="Search for a country..." />
            </div>
            <div className="filter">
            <Select value={prop.filterValue} onChange={prop.handelChange} defaultValue={prop.filterValue} className='select' styles={customStyles} classNamePrefix='inner-select' options={prop.options} />
            </div>
        </div>
    )
}