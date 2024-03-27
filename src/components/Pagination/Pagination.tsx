import ReactPaginate from "react-paginate"
import s from './Pagination.module.scss'

type PaginationProps = {
  onChangePage:any;
} 

const Pagination:React.FC<PaginationProps> = ({onChangePage}) => {
  return (
    <ReactPaginate
    className={s.paginat}
   breakLabel="..."
   nextLabel=">"
   onPageChange={(event) => onChangePage(event.selected+1)}
   pageRangeDisplayed={4}
   pageCount={3}
   previousLabel="<"
   renderOnZeroPageCount={null}
 /> 
  )}
export default Pagination