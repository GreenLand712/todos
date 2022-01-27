import React from 'react';
import { Link, useRouteMatch, Route } from 'react-router-dom';
import SinglePage from "./SinglePage"

export default function About(props) {
    const { url, path } = useRouteMatch()
    return(
        <div className='about_class'>
            <ul className='list'>
                <li>
                    <Link to={`${url}/about-app`}>About App</Link>
                </li>
                <li>
                    <Link to={`${url}/about-author`}>About Author</Link>
                </li>
            </ul>
            <Route path={`${path}/:slug`}>
                <SinglePage />
            </Route>
        </div>
    );
}
