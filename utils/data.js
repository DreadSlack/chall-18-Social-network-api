const names = [
    'Albert',
    'Blanca', 
    'Juno', 
    'Liam', 
    'Alfonse', 
    'Christian', 
    'Jane', 
    'Ester',
];

const thoughts = [
    'There are not that many apples today', 
    'The sky was bluer then usual today', 
    'Albert is such a sore looser',
    'Quite thick the air is in Pheonix',
    'Scrubs was such an under apprectiated classic',
    'CSS is so dauntting',
    'JavaScript is both so useful and so difficult',
    'The new magic set with the LOTR cards is so cool',
]

const users = []

const getShuffleNamTho = (arr) => arr[Math.floor(math.random() * arr.length)];
const genoratedNames = () => `${getShuffleNamTho(names)}`;
const genoratedThoughts = () => `${getShuffleNamTho(thoughts)}`;

module.export = {genoratedNames, genoratedThoughts};