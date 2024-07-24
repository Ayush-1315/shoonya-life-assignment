import filterCSS from "./filter.module.css"

export const Filter = ({
  onDateChange,
  onTypeChange,
  onSearch,
  typeOptions,
  dateOptions,
}) => {

  return (
    <div className={filterCSS.container}>
      <div>
      <select name="date" id="date" defaultValue={" "} onChange={(e)=>onDateChange(e.target.value)}>
          <option value="">
            Filter by Date
          </option>
          {dateOptions.map((date) => (
            <option
              value={date}
              key={date}
            >{`${date}-${date+1}`}</option>
          ))}
        </select>
      <select name="type" id="type" defaultValue={" "} onChange={(e)=>onTypeChange(e.target.value)}>
          <option value="" >
            Filter by Type
          </option>
          {typeOptions.map((type) => (
            <option
              value={type}
              key={type}
            >{`${type[0].toUpperCase()}${type.slice(1)}`}</option>
          ))}
        </select>
        
        
      </div>
      <div>
        <input type="text" placeholder="Search retreats by title or Location" onChange={e=>onSearch(e.target.value)}/>
      </div>
    </div>
  );
};
