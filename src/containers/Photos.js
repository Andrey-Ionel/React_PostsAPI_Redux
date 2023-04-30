import React, {memo, useEffect, useMemo, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPhotosRequest } from '../store/actions'
import Navigation from '../components/Navigation';
import { Result } from 'antd';
import Filters from '../components/Filters';
import { viewStatus } from '../utils/enums';
import { PostslistsView } from '../components/PostslistsView';
import { PostsgridView } from '../components/PostsgridView';

const Photos = () => {
    const [viewType, setViewType] = useState(viewStatus.list)
    const [photosQuantityPage, setPhotosQuantityPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)

    const { error, photos, totalCount } = useSelector(state => state?.photosReducer);
    const dispatch = useDispatch();
    const statusCode = (error + '').replace(/\D/g, '');
    const isLoading = false;

    useEffect(() => {
        if (fetching) {
            dispatch(getPhotosRequest(currentPage, totalCount)).
            finally(() => setFetching(false), setCurrentPage(prevState => prevState + 1));
        }
    }, [fetching]);


    useEffect(() => {
        addEventListener('scroll', handleScroll)
        return () => {
            removeEventListener('scroll', handleScroll)
        }
    }, []);

    const handleScroll = useMemo(() => (e) => {
        const isScreenBottom = e?.target?.documentElement?.scrollHeight -
          (e?.target?.documentElement?.scrollTop + window?.innerHeight) < 150;
        if (isScreenBottom) {
            setFetching(true);
        }
    }, [])

    const setQuantityPhotos = (value) => {
        setPhotosQuantityPage(value);
    }
    return (
        <main className="uk-main">
            <Navigation
                toggleFavorite={() => {}}
            />
            {isLoading &&
                <div className="uk-cover">
                    <p className="uk-logo">Loading...</p>
                </div>}
            {!!error &&
                <Result
                    status={statusCode}
                    title={<p>Sorry, something went wrong.</p>}
                    subTitle={<p>{error}</p>}
                />
            }
            {!isLoading && !error &&
                <div className="uk-section">
                    <div className="uk-container">
                        <Filters
                            setQuantityPosts={setQuantityPhotos}
                            viewType={viewType}
                            setViewType={setViewType}
                            postsQuantityPage={photosQuantityPage}
                        />
                        {!!photos?.length &&
                            viewType === viewStatus.list ?
                                <PostslistsView
                                    currentPageCards={photos}
                                    toggleFavorite={() => {}}
                                /> :
                                <PostsgridView
                                    currentPageCards={photos}
                                    toggleFavorite={() => {}}
                                />
                        }
                    </div>
                </div >
            }
        </main >
    )
}

export default memo(Photos)
