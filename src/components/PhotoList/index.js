import React, { useState } from 'react';



const PhotoList = ({ category }) => {
    const [photos] = useState([{
            name: "Grocery aisle",
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscins elit.Nunc ulticie'
        },
        {
            name: 'Grocery booth',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
            name: "Building exterior",
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectur'
        },
        {
            name: 'Restaurant table',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
            name: 'Cafe interior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
            name: "Cat green eyes",
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisciing'
        },
        {
            name: 'Green parrot',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
            name: "yellow macaw",
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'

        },
        {
            name: "Pug smile",
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
            name: "Pancakes",
            category: 'food',
            description: "lorem ipsum dolor sit amet, consectetur adipiscing"
        },
        {
            name: "Scallop pasta",
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
            name: "Burger",
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
            name: 'Fruit bowl',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
            name: "Green river",
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
            name: 'Docks',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
            name: 'Panoramic village by sea',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
            name: 'Domestic landscape',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
            name: 'Park bench',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        }

    ]);
    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
	<div className="flex-row">
	{currentPhotos.map((image, i) => (
		<img 
		src={require(`../../assets/small/${category}/${i}.jpg`)}
	alt={image.name}
	className="img-thumbnail mx-1"
	key={image.name}
	/>
	))}
	</div>
</div>
    )
}

export default PhotoList;