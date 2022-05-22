import React from 'react';
import './works.css';
import { useState } from "react";
import WorkItem from "../workItem/WorkItem";

const Works = () => {

    const workNavItems = ['ALL', 'WEB DESIGN', 'BRANDING', 'PHOTOGRAPHY', 'ILLUSTRATION']
    const [activeWorkNavItem, setActiveWorkNavItem] = useState(0)



    const sortedWorksItem = (index) => {

        setActiveWorkNavItem(index)
        let worksItemsCategory = []

        if (index === 0) {
            setWorkItems([...works.slice(0, 4)])
            setLoadMore(true)
        } else {
            works.forEach(work => {
                if (work.category.toLowerCase() === workNavItems[index].toLowerCase()) {
                    console.log(work)
                    worksItemsCategory = [...worksItemsCategory, work]
                }
            })
            setWorkItems(worksItemsCategory)
            setLoadMore(false)
        }


    }
    const works = [
        {
            id: '1',
            title: "A KITTEN'S LIFE",
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: '../img/latest-01.jpg',
            category: 'Photography',
        },
        {
            id: '2',
            title: "APPLE's LOST MAGIC",
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: '../img/latest-02.jpg',
            category: 'Web Design',
        },
        {
            id: '3',
            title: '100 YEARS PHOTOGRAPHY',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: '../img/latest-03.jpg',
            category: 'Branding',
        },
        {
            id: '4',
            title: 'GROOVEMADE PRODUCTS FOR MAC',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: '../img/latest-04.jpg',
            category: 'Web Design',
        },
        {
            id: '5',
            title: "A KITTEN'S LIFE",
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: '../img/latest-05.jpg',
            category: 'Photography',
        },
        {
            id: '6',
            title: "APPLE's LOST MAGIC",
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: '../img/latest-06.jpg',
            category: 'Photography',
        },
        {
            id: '7',
            title: '100 YEARS PHOTOGRAPHY',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: '../img/latest-07.jpg',
            category: 'Branding',
        },
        {
            id: '8',
            title: 'GROOVEMADE PRODUCTS FOR MAC',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: '../img/latest-08.jpg',
            category: 'Illustration',
        },
        {
            id: '9',
            title: 'GROOVEMADE PRODUCTS FOR MAC',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: '../img/latest-09.jpg',
            category: 'Branding',
        },
    ]
    const [workItems, setWorkItems] = useState(works.slice(0, 4))

    const [loadMore, setLoadMore] = useState(true)
    const clickLoadMore = () => {
        setLoadMore(false)
        setWorkItems(works)
    }

    return (
        <section id="work" className="container">
            <div className="work-items">

                <div className="works-header">
                    <h3>Latest Works
                            <div className="h3-line"></div>
                        </h3>

                    <ul className="works-nav">
                            {workNavItems.map((workNavItem, index) =>
                                <li
                                    className={activeWorkNavItem === index ? "works-nav-item active" : "works-nav-item"}
                                    onClick={() => sortedWorksItem(index)}
                                >
                                    {workNavItem}
                                </li>
                            )}
                        </ul>
                </div>


                {workItems.map((workItem) =>
                    <WorkItem workItem={workItem} key={workItem.id}/>
                )}

                {
                    loadMore &&
                    <button
                        className="btnLoadMore"
                        onClick={clickLoadMore}
                    >
                        Load More
                    </button>
                }


            </div>
        </section>
    );
};

export default Works;