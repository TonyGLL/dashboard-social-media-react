import React from 'react';

import Card from './card';

import './top-card-list.css';

const cardListData = [
    { 
        username: '@tonikin3',
        id: 1,
        followers: '1592',
        todayFollowers: 12,
        icon: 'images/icon-facebook.svg',
        name: 'facebook'
    },
    { 
        username: '@tonikin3',
        id: 2,
        followers: '28k',
        todayFollowers: 25,
        icon: 'images/icon-twitter.svg',
        name: 'twitter'
    },
    { 
        username: '@tonikin3',
        id: 3,
        followers: '6k',
        todayFollowers: 34,
        icon: 'images/icon-instagram.svg',
        name: 'instagram'
    },
    { 
        username: '@tonikin3',
        id: 4,
        followers: '12k',
        todayFollowers: -50,
        icon: 'images/icon-youtube.svg',
        name: 'youtube'
    }
];

export default function TopCardList() {
    return (
        <section className="top-cards">
            <div className="wrapper">
                <div className="grid">
                    {
                        cardListData.map((cardData) => {
                            return <Card key={cardData.id} {...cardData} />
                        })
                    }
                </div>
            </div>
        </section>
    );
}