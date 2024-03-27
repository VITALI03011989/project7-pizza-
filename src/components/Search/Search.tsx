import s from './Search.module.scss'

type SearchProps = {
  searchValue:string;
  setSearchValue:(name:string)=>void
}

const Search:React.FC<SearchProps>= ({searchValue,setSearchValue}) => {
  return ( 
  <div className={s.inputContainer}>
<img className={s.icon} src='https://novosibirsk.ferraantikor.ru/img/logo/search.png' alt='1'/>
  <input 
  value={searchValue}
  onChange={event => setSearchValue(event.target.value)} 
  className={s.search}
   placeholder='Поиск пиццы.......'/>
  {searchValue &&
   (<img onClick={()=>setSearchValue('')} className={s.icon1} src='https://cdn1.iconfinder.com/data/icons/basic-ui-icon-rounded-colored/512/icon-02-1024.png' alt='1'/>
  )}
  </div>
  )  
}
export default Search