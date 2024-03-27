import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
        <h1>
            <span><img src='https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663231612_2-mykaleidoscope-ru-p-znak-udivleniya-emotsii-3.png'/></span>
        <br/>
        Ничего не найдено :
        </h1>
        <p>К сожалению данная страница отсуствует в нашем интернет-магазине</p>
    </div>
  )
}
export default NotFoundBlock