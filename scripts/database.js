/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {   id: 1,
            image: "https://www.outdoorlife.com/uploads/2020/09/08/3K2W37MEBRHJXGJ3BU3WVB4M5Y.jpg?auto=webp&width=1440&height=1080/",
            name: "Bondi", 
            species: "Bass", 
            length: 12, 
            location: "Yellowstone Lake, Wyoming",
            bait: "Crawfish, Worms"
        },

        {   id: 2,
            image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Sheephead_photo.jpg",
            name: "Coyote", 
            species: "California Sheephead", 
            length: 36, 
            location: "Monterey Bay, California",
            bait: "Squids"
        },

        {
            id: 3,
            image: "https://www.sydneydives.com/uploads/1/2/7/2/12728650/editor/black-reef-leatherjacket_1.jpeg?1510956988",
            name: "Punky",
            species: "Leatherjacket",
            length: 21,
            location: "Melbourne, Australia",
            bait: "Worms"
        },

        {
            id: 4,
            image: "https://surfcastingrepublic.com/wp-content/uploads/2019/10/can-You-Catch-Red-Snapper-In-The-Shore.jpg",
            name: "Rosie",
            species: "Red Snapper",
            length: 14,
            location: "Panama City, Florida",
            bait: "Squids, Worms"
        },

        {
            id: 5,
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Walleye_painting.jpg",
            name: "Waldo",
            species: "Walleye",
            length: 20,
            location: "Moosehead Lake, Maine",
            bait: "Minnows"
        },

        {
            id: 6,
            image: "http://2.bp.blogspot.com/-pDLGo5kaARA/Tszhj4LSc2I/AAAAAAAAAS8/v6NJATNeD78/s1600/coho_salmon.jpg",
            name: "Sam",
            species: "Salmon",
            length: 9,
            location: "Milwaukee, Wisconsin",
            bait: "Sardines"
        },

        {
            id: 7,
            image: "https://i.pinimg.com/564x/c3/ac/ee/c3acee0c58119b78955e10788bd9b298.jpg",
            name: "Lucy",
            species: "Golden Perch",
            length: 13,
            location: "Queensland, Australia",
            bait: "Cray, Shrimp, Worms"
        },

        {
            id: 8,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqiwSjrUeiS4jG3kcPJuZVgQrqZBFCuZgvg&usqp=CAU",
            name: "Lannister",
            species: "Coral Trout",
            length: 10,
            location: "Great Astrolabe Reef, Fiji",
            bait: "Squids"
        },

        {
            id: 9,
            image: "https://media-be.chewy.com/wp-content/uploads/2019/10/28121856/shutterstock_373069729-1.jpg",
            name: "Jagger",
            species: "Crayfish",
            length: 6,
            location: "New Orleans, Louisiana",
            bait: "Worms"
        },

        {
            id: 10,
            image: "https://images.squarespace-cdn.com/content/v1/5ac99982ee175958d8ac113c/1575256252673-RIUCFVZ25H4YQ3BCOIL6/marlin+banner.jpg?format=2500w",
            name: "Malibu",
            species: "Marlin",
            length: 65,
            location: "Cabo San Lucas, Mexico",
            bait: "Squids, Anchovies, Herring, Ballyhoo, Bonefish"
        },
    ]
}

/* export this module to main.js*/
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}