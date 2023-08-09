import React, {useState,  useEffect} from 'react'
import {db} from '../../firebase'
import {collection , onSnapshot} from "firebase/firestore";
import CircularProgress from '@mui/material/CircularProgress';
import ReactPaginate from 'react-paginate';
import { Navbar } from '../Index/Main/Navbar/Navbar';
import { Footer } from '../Index/Main/Footer/Footer';
import { Link } from 'react-router-dom';
import './Story.scss'

export const Story = () =>{

    const [info, setInfo] = useState()
    const [news, setNews] = useState()
    const [value, setValue] = useState('')
    const [isOpne, setIsOpne] = useState(true)
    const ScreenWidth = window.innerWidth > 900 ? 500 : 100

    const filterStory = info?.filter((story) =>{
        return story.Title.stringValue.toLowerCase().includes(value.toLowerCase())
    })

    useEffect(() =>{
    onSnapshot(collection(db,"Posts"), (snapshot) => {
        let inf =[]
        snapshot.docs.forEach((doc) => {
            inf.push({...doc._document.data.value.mapValue.fields, id: doc.id})
        })
        setInfo(inf)
        console.log(inf)
    })

      onSnapshot(collection(db,"New"), (snapshot) =>{
        let newses = []
        snapshot.docs.forEach((doc) => {
          newses.push({...doc._document.data.value.mapValue.fields, id: doc.id})
      })
      setNews(newses)
      })      
    }, [])

      const [currentItems, setCurrentItems] = useState([]);
      const [pageCount, setPageCount] = useState(0);
      const [itemOffset, setItemOffset] = useState(0);
      const itemsPerPage = 2
    
      useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(filterStory?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filterStory?.length / itemsPerPage));
      }, [itemOffset, itemsPerPage, info]);
    
      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filterStory?.length;
        setItemOffset(newOffset);
      };

      const handleClick = (event) => {
        setValue(event.target.textContent)
        setIsOpne(!isOpne);
      }

      const inputClick = () => {
        setIsOpne(true)
      }


    return (
      <>
        <Navbar />
        {info === undefined ? (
          <CircularProgress color="success" />
        ) : (
          <div className="get-posts" style={{ marginTop: `35px` }}>
            <div className="get-posts__containers">
              {filterStory.length == 0 ? (
                <div
                  className="get-posts__container"
                  style={{ marginBottom: `55px` }}
                >
                  <div
                    className="get-posts__img"
                    style={{
                      backgroundImage: `url(https://www.soyuz.ru/public/uploads/files/6/7128721/201709021034588ad2e66fed.jpg)`,
                    }}
                  ></div>
                  <div className="get-posts__date">
                    <span className="get-posts__date--span">
                      <span className="get-posts__root" style={{ marginTop: `15px` }}>&#128277;</span>
                    </span>
                  </div>
                  <div className="get-posts__description">
                    Извините но данной статьи нет
                  </div>
                  <div className="get-posts__text">
                    По данному запросу статей нет. Очистите поле ввода и введите другой текст для поиска. По данному запросу статей нет. Очистите поле ввода и введите другой текст для поиска
                  </div>
                </div>
              ) : (
                currentItems?.map((inf) => (
                  <div
                    className="get-posts__container"
                    style={{ marginBottom: `55px` }}
                    id="top"
                  >
                    <div
                      className="get-posts__img"
                      style={{ backgroundImage: `url(${inf.Img.stringValue})` }}
                    ></div>
                    <div className="get-posts__date">
                      <span className="get-posts__date--span">
                        <span style={{ marginTop: `15px` }}>
                          {inf.Data.timestampValue.slice(5, 10)}
                        </span>
                      </span>
                    </div>
                    <div className="get-posts__description">
                      {inf.Title.stringValue}
                    </div>
                    <div className="get-posts__text">
                      {inf.Text.stringValue.slice(0, ScreenWidth)}...{" "}
                      <Link className="link" to={`/posts/${inf.id}`}>
                        Читать дальше
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="get-posts__containers">
              <div className="get-posts__block">
                <div>
                  <input
                    type="text"
                    className="get-posts__input"
                    placeholder="Поиск..."
                    onChange={(e) => setValue(e.target.value)}
                    onClick={inputClick}
                    value={value}
                  />
                </div>
                <div>
                {value && isOpne ? (
                  <ul className="get-posts__search">
                      <>
                        {filterStory?.map((i) => (
                          <li className="get-posts__li"
                          onClick={handleClick}
                          >
                            {i.Title.stringValue}
                          </li>
                        ))}
                      </>
                  </ul>
                  ) : null}
                </div>
              </div>
              <div className="get-posts__blocks">
                <h3>Новости</h3>
                {news?.map((news) => (
                  <div>
                    <hr />
                    <h4>{news.Title.stringValue}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
          <ReactPaginate
          previousLabel=""
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="paginations"
          pageLinkClassName="page-nums"
          previousLinkClassName="page-nums"
          nextLinkClassName="page-nums"
          activeLinkClassName="active"
        />
        <Footer />
      </>
    );
}