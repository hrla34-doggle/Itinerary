const faker = require('faker');

// Used for generation of URL's
var TripLocation = ['Australia', 'Israel', 'New_Zealand', 'Israel', 'Australia', 'South_Korea', 'South_Africa', 'South_Korea', 'Canada','China', 'Switzerland', 'New_Zealand', 'Costa_Rica', 'New_Zealand', 'New_Zealand', 'Costa_Rica', 'Peru', 'Kenya', 'Morocco', 'Thailand', 'Kenya', 'Russia', 'Egypt', 'Morocco', 'Australia', 'China', 'New_Zealand', 'Mexico', 'Costa_Rica', 'Brazil', 'Poland', 'Costa_Rica', 'Norway','Peru','South_Korea', 'Japan', 'Mexico','United_States', 'France', 'Japan', 'Vietnam', 'Brazil', 'Ireland', 'Canada', 'Australia', 'Thailand', 'Vietnam', 'Peru', 'Egypt', 'Brazil', 'Greece', 'Costa_Rica', 'Kenya', 'Kenya', 'South_Korea', 'New_Zealand', 'Greece', 'Mexico', 'Australia', 'Costa_Rica', 'Norway', 'South_Korea', 'Vietnam', 'United_States', 'Greece', 'South_Africa', 'Morocco', 'India', 'Kenya', 'Australia', 'New_Zealand', 'Germany', 'Peru', 'South_Africa', 'Peru', 'Italy', 'Ireland', 'India', 'Australia', 'Morocco', 'United_States', 'Vietnam', 'Israel', 'Poland', 'Italy', 'Egypt', 'Mexico', 'Spain', 'Japan', 'Canada', 'Costa_Rica', 'Switzerland', 'Israel', 'Peru', 'Brazil', 'Brazil', 'Japan', 'South_Africa', 'Mexico', 'Poland'];

// Main function to export
// will generate a fakeTrip object
// pass in the id index
function fakeTrip(id) {
    const mapPic = `https://ebtrafalgar.s3-us-west-1.amazonaws.com/Map+pictures/map_pictures/${TripLocation[faker.random.number({min: 0, max: 99})]}.png`

    var output = [
        id,
        faker.lorem.words(),
        faker.address.country(),
        mapPic,
    ];

    return output.join('\t');
}

// only make 1million of these
// pass in the id index
function fakeCity (id) {
    var output = [
        id,
        faker.address.city(),
        faker.random.number({min: 0, max: 599}),
        faker.random.number({min: 0, max: 599})
    ]

    return output.join('\t');
}

// pass in the id index of the trip it's associated to
function fakeSchedule (trip_id) {
    let output = [
        trip_id, // foreign key to trip table
        faker.lorem.word(), // activity name
        faker.random.number({min: 1, max: 1000000}), // random city foreign key 1 to 1mill
        faker.company.companyName(), // hotel name
        faker.lorem.words(), // meals
        faker.lorem.sentence() // description
    ]

    return output.join('\t');
}

// pass in the id index of the trip it's associated to
function fakeOptionals (trip_id) {
    let output = [
        trip_id,
        faker.lorem.words(),
        faker.finance.amount(50, 800, 2, '$'),
        faker.lorem.sentence(),
        faker.random.number({min: 1, max: 3})
    ]

    return output.join('\t')
}


module.exports = {
    fakeTrip,
    fakeCity,
    fakeSchedule,
    fakeOptionals
};


