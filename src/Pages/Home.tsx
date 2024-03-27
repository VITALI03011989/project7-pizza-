
import React from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Pagination from "../components/Pagination/Pagination"

type PizzaType = {
  id:string,
  title:string,
  price:number,
  imageUrl:string,
  sizes:number[],
  types:number[],
  rating:number
}

export type TSortingType = {
  name:string;
  sort:string
}

const Home = ({searchValue}:{searchValue:string}) => {
    const [items,setItems]=React.useState<PizzaType[]>([])
    const [categoryId,setCategoryId]=React.useState(0)
    const [currentPage,setCurrentPage]=React.useState(1)
    const [sortType,setSortType]=React.useState<TSortingType>({
      name:'популярности',
      sort:'rating'
    })

    const order = sortType.sort.includes('-')? 'asc':'desc';
    const sortBy=sortType.sort.replace('-','');
    const category=categoryId > 0 ? `category=${categoryId}`:''
    const search =searchValue ? `search=${searchValue}`:''

React.useEffect(() => {
fetch(
  `https://65b5eb1ada3a3c16ab0007e2.mockapi.io/items?page=${currentPage}&limit=4&${
  category}${search}&sortBy=${sortBy}&order=${order}${search}`)
  .then((res)=> res.json())
  .then((arr) => {
  if (typeof arr === 'object') {
    setItems(arr)
  }})
}, [categoryId,sortType,searchValue,currentPage])

  return (
    <>
    <div className="content__top">
    <Categories value={categoryId} onClickCategory={(i:number) => setCategoryId(i)}/>
    <Sort value={sortType} onChangeSort={(i:TSortingType) => setSortType(i)}/>    
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
           {items?.filter((obj) =>{
            if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
              return true
            }
            return false })
           .map((obj)=> (
           <PizzaBlock key={obj.id} {...obj}/>
           ))}
         </div>
 
    <div>
  <Pagination onChangePage={(number:any)=>setCurrentPage(number)}/>
     </div>
     </>
  )}
export default Home