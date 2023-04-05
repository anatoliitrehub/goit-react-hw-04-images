// import { Component } from 'react';
import { useEffect, useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import FormApi from 'components/FormApi/FormApi';
import Loader from 'components/Loader/Loader';
import Modal from './Modal/Modal';

const App = () => {
  // state = {
  //   gallery: [],
  //   total: 0,
  //   searchWord: '',
  //   page: 0,
  //   perPage: 12,
  //   loading: false,
  //   loadMore: false,
  //   modalOpen: false,
  //   activeId: 0,
  // };
  const [gallery, setGallery] = useState([]);
  // const [total,setTotal] = useState(0);
  const [searchWord, setSearchWord] = useState('');
  const [page,setPage] = useState(0);
  // const [perPage,setPerPage] = useState(12);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeId, setActiveId] = useState(0);

  const perPage = 12

  // shouldComponentUpdate(newProps, newState) {
  //   if (newState.modalOpen !== this.state.modalOpen) return false;
  //   return true;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.page !== this.state.page ||
  //     prevState.searchWord !== this.state.searchWord
  //   ) {
  //     this.setState(() => ({ loading: true }));

  //     // console.log("loading", this.state.loading)

  //     // this.setState(()=>({ loading:true}))

  //     const fetchApi = async () =>
  //       await FormApi(
  //         searchWord,
  //         page,
  //         perPage
  //       );

  //     // this.setState(() => ({ loading: true }));
  //     setLoading(true)

  //     fetchApi()
  //       .then(data => {
  //         if(!data.data.hits.length) {
  //           setLoading(false);
  //           setLoadMore(false);
  //           throw new Error("There are no results")}
  //         setGallery([...gallery, ...data.data.hits]);
  //         if (page * perPage < data.data.totalHits) {
  //           setLoadMore(true);
  //         } else setLoadMore(false);;
  //         setLoading(false);
  //       })
  //       .catch(error=>alert(error));
  //     // .finally(this.setState(()=>({loading:false})))
  //     // console.log("loading", this.state.loading)

  //     //  console.log("App update")
  //   }
  // }

 
  useEffect(()=>{
    if(!searchWord) return
   
        setLoading(true);
  
        // console.log("loading", this.state.loading)
  
        // this.setState(()=>({ loading:true}))
  
        const fetchApi = async () =>
          await FormApi(
            searchWord,
            page,
            perPage
          );
  
        // this.setState(() => ({ loading: true }));
        setLoading(true)
  
        fetchApi()
          .then(data => {
            if(!data.data.hits.length) {
              setLoading(false);
              setLoadMore(false);
              throw new Error("There are no results")}
            setGallery((gallery)=>[...gallery, ...data.data.hits]);
            if (page * perPage < data.data.totalHits) {
              setLoadMore(true);
            } else setLoadMore(false);;
            setLoading(false);
          })
          .catch(error=>alert(error));
        // .finally(this.setState(()=>({loading:false})))
        // console.log("loading", this.state.loading)
  
        //  console.log("App update")
      },[page,searchWord])

  const getQuery= (newSearchWord) => {
    // this.setState(() => ({
    //   searchWord: searchWord,
    //   page: 1,
    //   gallery: [],
    //   loading: true,
    // }));
    setSearchWord(newSearchWord);
    setPage(1);
    setGallery([]);
    setLoading(true);
  }

  const pageChange = () => {
    // if((this.state.page*this.state.perPage))
    setPage(page + 1);
  }

  const activeImg = (id) => {
    // console.log("active",id)
    // this.setState(() => ({
    //   activeId: id,
    //   modalOpen: true,
    // }));
    setActiveId(id);
    setModalOpen(true);
  }

  const handlerModalClose = (e) => {
    setModalOpen(false);
  }

  
    return (
      <>
        <Searchbar getQuery={getQuery} />
        {gallery.length !== 0 && (
          <ImageGallery
            gallery={gallery}
            activeImg={activeImg}
          />
        )}
        {loading && <Loader />}
        {loadMore && (
          <Button pageIncrement={pageChange} />
        )}
        {modalOpen && (
          <Modal
            gallery={gallery}
            imgId={activeId}
            modalClose={handlerModalClose}
            modalOpen={modalOpen}
          />
        )}
      </>
    );
  }


export default App;
