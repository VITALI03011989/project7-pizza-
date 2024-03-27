
type CategoryProps ={
  value:number;
  onClickCategory:any
}

const Categories:React.FC<CategoryProps> = ({value,onClickCategory}) => {

    const categories = ['Все','Мясные','Вегетерианские','Гриль','Острые','Закрытые']

  return (
    <div className="categories">
            <ul>
                {categories.map((categoryName,i)=>
               <li key={i} onClick={() => onClickCategory(i)} className={value === i ? "active":''}>{categoryName}</li> )}
            </ul>
          </div>
  )}
export default Categories