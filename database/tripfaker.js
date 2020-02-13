const faker = require('faker');

// Used for generation of URL's
var TripLocation = ['Australia', 'Israel', 'New_Zealand', 'Israel', 'Australia', 'South_Korea', 'South_Africa', 'South_Korea', 'Canada','China', 'Switzerland', 'New_Zealand', 'Costa_Rica', 'New_Zealand', 'New_Zealand', 'Costa_Rica', 'Peru', 'Kenya', 'Morocco', 'Thailand', 'Kenya', 'Russia', 'Egypt', 'Morocco', 'Australia', 'China', 'New_Zealand', 'Mexico', 'Costa_Rica', 'Brazil', 'Poland', 'Costa_Rica', 'Norway','Peru','South_Korea', 'Japan', 'Mexico','United_States', 'France', 'Japan', 'Vietnam', 'Brazil', 'Ireland', 'Canada', 'Australia', 'Thailand', 'Vietnam', 'Peru', 'Egypt', 'Brazil', 'Greece', 'Costa_Rica', 'Kenya', 'Kenya', 'South_Korea', 'New_Zealand', 'Greece', 'Mexico', 'Australia', 'Costa_Rica', 'Norway', 'South_Korea', 'Vietnam', 'United_States', 'Greece', 'South_Africa', 'Morocco', 'India', 'Kenya', 'Australia', 'New_Zealand', 'Germany', 'Peru', 'South_Africa', 'Peru', 'Italy', 'Ireland', 'India', 'Australia', 'Morocco', 'United_States', 'Vietnam', 'Israel', 'Poland', 'Italy', 'Egypt', 'Mexico', 'Spain', 'Japan', 'Canada', 'Costa_Rica', 'Switzerland', 'Israel', 'Peru', 'Brazil', 'Brazil', 'Japan', 'South_Africa', 'Mexico', 'Poland'];

// Main function to export
// will generate a fakeTrip object thing
function fakeTrip(id) {
    const days = faker.random.number({min: 3, max: 6});
    const cities = [];
    for (var i = 0; i < days; i++) {
        cities.push(faker.address.city());
    }
    const mapPic = `https://ebtrafalgar.s3-us-west-1.amazonaws.com/Map+pictures/map_pictures/${TripLocation[faker.random.number({min: 0, max: 99})]}.png`


    return {
        id,
        name: faker.lorem.words(),
        location: faker.address.country(),
        days,
        cities,
        mapPic,
        schedule: buildSchedule(days),
        optionals: buildOptionals(faker.random.number({min: 0, max: days}), days),
        coordinates:buildCoordinates(days)
    }
}

// helper function to build out schedule
function buildSchedule(number) {
    var output = [];

    for (var i = 0; i < number; i++) {
        output.push({
            activity: faker.lorem.word() + " ",
            city: faker.address.city() + " ",
            title: faker.lorem.words() + " ",
            hotel: faker.company.companyName() + " ",
            meal: faker.lorem.words() + " ",
            description: faker.lorem.sentence() + " "
        });
    }

    return output;
}

// helper function to build optionals object
function buildOptionals(amnt, numDays) {
    const output = [];

    for (var i = 0; i < amnt; i++) {
        output.push({
            title: faker.lorem.words() + " ",
            price: faker.finance.amount(50, 800, 2, '$'),
            description: faker.lorem.sentence() + " ",
            day: faker.random.number({min: 1, max: numDays})
        });
    }

    return output;
}

// helper function to build coordinates object
function buildCoordinates(number) {
    var output = [];

    for (var i = 0; i < number; i++) {
        output.push({
            top: faker.random.number({min: 0, max: 599}),
            left: faker.random.number({min: 0, max: 599})
        });
    }

    return output;
}


module.exports = fakeTrip;