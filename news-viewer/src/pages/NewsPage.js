import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { useParams } from "react-router-dom"

const NewsPage = () => {
    const param = useParams();
    const category = param.category || 'all';

    return (
        <>
            <Categories />
            <NewsList category={category}/>
        </>
    )
}

export default NewsPage;