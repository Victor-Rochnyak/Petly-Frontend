import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import getNews from '../News/getNews';
import { HiOutlineXCircle } from 'react-icons/hi';
import { IoSearchSharp } from 'react-icons/io5';
import { Card, Title, Form, Button, Input } from './NewsPage.styled';
import NewsCard from '../../components/NewsCards/NewsCard';
//  import { HiSearch } from "react-icons/hi";  лупа
// import { IoCloseCircleOutline } from "react-icons/io5";  хретсик

// const News = () => {
//   (async () => {
//     const newsArray = await getNews();
//     const newsResult = newsArray.result;
//     console.log(newsResult);
//   })();
//   return <></>;
// };

// const ourFriends = () => {
//   (async () => {
//     const newsArray = await getOurFriends();
//     const {services} = newsArray;
//     console.log(services);
//   })();
//   return <></>;
// };

// export default ourFriends;

const News = () => {
  const [news, setNews] = useState([]);
  const [searchParams, setSeachParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [search, setSearch] = useState('');

  useEffect(() => {
    const newsPage = async () => {
      try {
        const newsArray = await getNews();
        const newsRes = newsArray.result;
        console.log(newsRes);
        setNews(newsRes);
      } catch (error) {
        console.log(error.message);
      }
    };
    newsPage();
  }, []);

  const handleChange = e => {
    setSeachParams({ query: e.currentTarget.value.toLocaleLowerCase().trim() });
    setSearch(e.currentTarget.value.toLocaleLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSeachParams({ query: search });
  };

  const getFilteredNews = () => {
    if (news) {
      return news.filter(
        newsItem =>
          newsItem.title.toLowerCase().includes(search) ||
          newsItem.description.toLowerCase().includes(search)
      );
    }
  };

  const filteredNews = getFilteredNews();

  const removeQuery = () => {
    setSearch('');
  };

  return (
    <div>
      <Title>News</Title>
      {/* <ToastContainer /> */}
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          value={search}
          placeholder="Search"
          autoFocus
          onChange={handleChange}
        />
        <Button
          type="submit"
          style={{ position: 'absolute', right: '10px', top: '10px' }}
        >
          {!search && <IoSearchSharp size={20} />}
          {search && <HiOutlineXCircle size={20} onClick={removeQuery} />}
        </Button>
      </Form>
      <div>
        {news.length > 0 ? (
          filteredNews.map(newItem => (
            <Card key={newItem._id}>
              <NewsCard newItem={newItem} />
            </Card>
          ))
        ) : (
          <div />
        )}
      </div>
      {search !== '' && query && filteredNews.length === 0 && (
        <div>
          <div>Nothing found. Please, try again.</div>
        </div>
      )}
    </div>
  );
};

export default News;
