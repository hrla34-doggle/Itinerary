const Trip = require('./index');

var TripAdjectives = ['Gorgeous', 'Fun', 'Amazing', 'Crazy', 'Adventurous'];
var TripStyle = [' trip', ' escapade', ' vacation', ' getaway', ' experience']
var TripDetails = [' in the middle of', ' around', ' through', ' right in', ' in'];
var TripEnding = [' the ghetto', ' the ruins', ' the country', ' the best towns', ' unchartered territory'];
var TripLocation = ['Egypt', 'Kenya', 'Morocco', 'South_Africa','China', 'Israel', 'India', 'Japan', 'South_Korea', 'Thailand', 'Vietnam','France', 'Germany', 'Greece', 'Ireland', 'Italy', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Russia', 'Spain', 'Switzerland', 'United_Kingdom','United_States', 'Costa_Rica', 'Mexico', 'Canada','Brazil', 'Peru','Australia', 'New_Zealand', 'Colombia'];

var cities = {
    Egypt: ['Cairo', 'Alexandria', 'Luxor', 'Aswan', 'Giza'],
    Kenya: ['Nairobi', 'Nakuru', 'Mombosa', 'Eldoret', 'Kikuyu'],
    Colombia: ['Bogota', 'Barranquilla', 'Medellin', 'Cartagena', 'Santa Marta', 'Cali'],
    Morocco: ['Casablanca', 'Fez', 'Marrakech', 'Tinghir', 'Tangier', 'Meknes'],
    South_Africa: ['Cape Town', 'Johannesburg', 'Pretoria', 'Soweto'],
    China: ['Beijing', 'Shanghai', 'Xian', 'Chengdu', 'Hangzhou', 'Guangzhou', 'Chongqing', 'Nanjing', 'Lhasa'],
    Israel: ['Jerusalem', 'Tel Aviv', 'Tiberias', 'Acre', 'Herzliya', 'Beersheva'],
    India: ['Agra', 'Delhi', 'Jaipur', 'Calcutta', 'Mumbai', 'Bangalore', 'Kolkata'],
    Japan: ['Tokyo', 'Osaka', 'Kyoto', 'Asakusa', 'Hiroshima'],
    South_Korea: ['Seoul', 'Busan', 'Andong', 'Daejeon', 'Suwon', 'Yeosu'],
    Thailand: ['Bangkok', 'Sukhothai', 'Chiang Mai', 'Dammoen Saduak'],
    Vietnam: ['Danang', 'Hanoi', 'Hue', 'Ho Chi Minh City'],
    France: ['Avignon', 'Cannes', 'Lyon', 'Paris', 'Bordeaux', 'Giverny', 'Nice', 'Versailles'],
    Germany: ['Berlin', 'Dresden', 'Frankfurt', 'Cologne', 'Worms', 'Hamburg', 'Munich'],
    Greece: ['Athens', 'Olympia', 'Santorini', 'Corfu', 'Delphi'],
    Ireland: ['Blarney', 'Dublin', 'Cork', 'Galway', 'Limerick'],
    Italy: ['Capri', 'Florence', 'Rome', 'Pisa', 'Venice', 'Naples', 'Pompeii'],
    Netherlands: ['Amsterdam', 'Delft', 'Rotterdam', 'Groningen'],
    Norway: ['Bergen', 'Oslo', 'Lillehammer', 'Stavanger', 'Fredrickstad'],
    Poland: ['Warsaw', 'Gdansk', 'Zakopane', 'Krakow'],
    Portugal: ['Coimbra', 'Mateus', 'Porto', 'Lisbon'],
    Russia: ['Moscow', 'Saint Petersburg', 'Kazan'],
    Spain: ['Madrid', 'Cordoba', 'Barcelona', 'Granada', 'Seville', 'Toledo', 'Valencia', 'Bilbao'],
    Switzerland: ['Zurich', 'Bern', 'Lucerne', 'St. Moritz'],
    United_Kingdom: ['Edinburgh', 'Liverpool', 'London', 'York', 'Oxford', 'Glasgow', 'Cardiff', 'Manchester'],
    United_States: ['Miami', 'Orlando', 'Tampa', 'Jacksonville'],
    Costa_Rica: ['San Jose', 'Monteverde', 'Liberia', 'Tortuguero'],
    Mexico: ['Mexico City', 'Cancun', 'Tulum', 'Chichen Itza', 'Cozumel', 'Puerto Vallarta'],
    Canada: ['Montreal', 'Quebec_City', 'Ottawa', 'Toronto', 'Vancouver', 'Banff'],
    Brazil: ['Rio de Janeiro', 'Sao Paulo', 'Brasilia', 'Salvador'],
    Peru: ['Cuzco', 'Lima', 'Puno', 'Trujillo', 'Arequipa'],
    Australia: ['Melbourne', 'Sydney', 'Canberra', 'Adelaide'],
    New_Zealand: ['Auckland', 'Christchurch', 'Picton', 'Wellington']
  };

var createTripName = () => {
    var TripName = "";
    TripName+=TripAdjectives[Math.floor(Math.random() * 4)];
    TripName+=TripStyle[Math.floor(Math.random() * 4)];
    TripName+=TripDetails[Math.floor(Math.random() * 4)];
    TripName+=TripEnding[Math.floor(Math.random() * 4)];
    return TripName;
}
var createOptional = (x) => {
    var optional = {};
    let adjective = ['Big', 'Crazy', 'Amazing', 'Boring', 'Cool'];
    let location = ['Muesuem', 'National Park', 'Catacombs', 'Haunted Mansion', 'Casino', 'Citadel', 'Amusement Park'];
    let events = ['Ride Horses on the Beach', 'Go Bungee Jumping', 'Take a Hot Air Balloon Ride', 'Visit an Elephant Sanctuary', 'Be in a Parade Float', 'Ride a Mechanical Bull', 'Go Skinny Dipping at Night', 'Picnic in the Park', 'Watch a TED Talk', 'Make a Scrapbook of Old Memories', 'Go Fishing', 'Learn to Rock Climb','Catch Up with an Old Friend over Coffee', 'Marathon the Entire Harry Potter Series'];
    let eventEndings = ['with your Mom', 'with The Locals', 'in the Ghetto', 'Cultural Immersive', 'with International Spies', 'with a Dolphin', 'while under Suppresive Fire', 'with a Hostage', 'Cold and Alone']

    let price = `$${(Math.random() * 500).toFixed(2)}`;
    let description = "Enjoy a typical Bosnian evening in an authentic restaurant, famous for its local cuisine, accompanied with lively entertainment, to ensure an unforgettable final evening in Sarajevo."
    let boolean = [true, false];
    optional.title= boolean[Math.floor(Math.random() * 2)] ?`${adjective[Math.floor(Math.random()* 4)]} ${location[Math.floor(Math.random()* 6)]}`: `${events[Math.floor(Math.random() * 13)]} ${eventEndings[Math.floor(Math.random() * 8)]}`
    optional.price = price;
    optional.description = description;
    optional.day = x + 1;
    return optional;
}



var createTripObject = (x) => {
    var trip = {};
    trip.id = x;
    trip.name = createTripName();
    trip.location = TripLocation[x]
    trip.cities = cities[trip.location];
    trip.mapPic = `https://ebtrafalgar.s3-us-west-1.amazonaws.com/Map+pictures/map_pictures/${trip.location}.png`;
    trip.name+=` of ${trip.location}`;
    trip.optionals = [];
    

    createSchedule = () => {
        var schedule = [];
        var moreDays = [false, true];
        var hasOptional = [true, false, true];
        var activities = ['Sightseeing', 'Free Time', 'Free Day', 'Tour', 'Free Time']
        var hotels = ['Hotel California', 'Holidae Inn', 'The Caviar', 'Trump Towers', 'The Ghetto Inn', 'Traviago', 'Borgo Egnazia', 'The Spectator Hotel', 'The Lowell', 'Vidanta Nuevo Vallarta', 'The Temple House', 'Montage Los Cabos', 'Round Hill Hotel and Villas', 'The Milestone Hotel', 'Casa Chameleon', 'Belmond La Residence', 'Lebua at State Tower', 'Le Meurice', 'Park Hyatt Siagon', 'Jumeirah at Etihad Towers', 'Ngorongoro Serena Safari Lodge', 'Nayara Gardens', 'Post Ranch Inn', 'Palacio del Inka', 'The St. Regis', 'Hotel Bristol', 'Hacienda AltaGracia', 'The Leela Palace', 'The Lodge & Spa', 'Singita Sabi Sand', 'The Farm', 'Your Grandmas House', 'JW Marriot', 'The Mulia', 'Singita Grumeti', 'The Bushcamp', 'Lapa Rios Lodge', 'Rosewood', 'Royal Mansour', 'Six Senses'];

        var meals = ['Breakfast', 'Breakfast, Lunch', 'Breakfast, Dinner', 'Lunch', 'Lunch, Dinner', 'Dinner', 'Breakfast, Lunch, Dinner'];
        var city = 0;
        var staylength = 0;
        var tripLength = 0;
        while(city <= trip.cities.length - 1) {
            var scheduleDay = {};
            
            if( tripLength === 0) {
                scheduleDay.activity = 'Arrive';
                scheduleDay.city = trip.cities[city];
                scheduleDay.title = `${scheduleDay.activity} ${scheduleDay.city}`
                scheduleDay.hotel = hotels[Math.floor(Math.random() * 39)];
                scheduleDay.meal = meals[Math.floor(Math.random() * 6)];
                scheduleDay.description = "Your 'Local Specialist' will share the sights and sounds of Belgrade from an insider's perspective this morning. Delve into its Celtic, Roman, Serbian, Ottoman and Austro-Hungarian history, then visit Kalemegdan Fortress, the symbol of the Serbian capital and perched perfectly on a ridge overlooking the confluence of two great rivers. Discover how each of these empires have had a hand in rebuilding the fortress over the past 16 centuries. This evening, we reunite one final time for a rousing Farewell Dinner to reminisce over our shared travel experience.";
                let optional = hasOptional[Math.floor(Math.random() * 3)];
                if(optional === true) {
                    trip.optionals.push(createOptional(tripLength));
                }
            } else if( city === trip.cities.length - 1 ) {
                scheduleDay.activity = 'Depart';
                scheduleDay.city = trip.cities[city];
                scheduleDay.title = `${scheduleDay.activity} ${scheduleDay.city}`
                scheduleDay.hotel = false;
                scheduleDay.meal = meals[Math.floor(Math.random() * 1)]
                scheduleDay.description = "Your 'Local Specialist' will share the sights and sounds of Belgrade from an insider's perspective this morning. Delve into its Celtic, Roman, Serbian, Ottoman and Austro-Hungarian history, then visit Kalemegdan Fortress, the symbol of the Serbian capital and perched perfectly on a ridge overlooking the confluence of two great rivers. Discover how each of these empires have had a hand in rebuilding the fortress over the past 16 centuries. This evening, we reunite one final time for a rousing Farewell Dinner to reminisce over our shared travel experience.";
                city++;
            } else if( staylength === 1 ) {
                schedule[tripLength - 2].title += " (2 Nights)";
                staylength = 0;
                scheduleDay.city = trip.cities[city];
                scheduleDay.hotel = hotels[Math.floor(Math.random() * 39)];
                scheduleDay.meal = meals[Math.floor(Math.random() * 6)];
                scheduleDay.activity = "Travel";
                scheduleDay.description = "Your 'Local Specialist' will share the sights and sounds of Belgrade from an insider's perspective this morning. Delve into its Celtic, Roman, Serbian, Ottoman and Austro-Hungarian history, then visit Kalemegdan Fortress, the symbol of the Serbian capital and perched perfectly on a ridge overlooking the confluence of two great rivers. Discover how each of these empires have had a hand in rebuilding the fortress over the past 16 centuries. This evening, we reunite one final time for a rousing Farewell Dinner to reminisce over our shared travel experience.";
                scheduleDay.title = `${scheduleDay.city} - `;
                let optional = hasOptional[Math.floor(Math.random() * 3)];
                if(optional === true) {
                    trip.optionals.push(createOptional(tripLength));
                }
                city++;
                scheduleDay.title += `${trip.cities[city]}`;
            } else {
                scheduleDay.city = trip.cities[city];
                scheduleDay.hotel = false;
                scheduleDay.meal = meals[Math.floor(Math.random() * 6)];
                scheduleDay.description = "Your 'Local Specialist' will share the sights and sounds of Belgrade from an insider's perspective this morning. Delve into its Celtic, Roman, Serbian, Ottoman and Austro-Hungarian history, then visit Kalemegdan Fortress, the symbol of the Serbian capital and perched perfectly on a ridge overlooking the confluence of two great rivers. Discover how each of these empires have had a hand in rebuilding the fortress over the past 16 centuries. This evening, we reunite one final time for a rousing Farewell Dinner to reminisce over our shared travel experience.";
                var staying = moreDays[Math.floor(Math.random() * 2)];
                if( staying === false ) {
                    staylength = 0;
                    scheduleDay.hotel = hotels[Math.floor(Math.random() * 39)];
                    scheduleDay.activity = "Travel";
                    let optional =hasOptional[Math.floor(Math.random() * 3)];
                    if(optional === true) {
                    trip.optionals.push(createOptional(tripLength));
                }
                    scheduleDay.title = `${scheduleDay.city} - `;
                    city++;
                    scheduleDay.title += `${trip.cities[city]}`;
                } else {
                    staylength++;
                    scheduleDay.activity = activities[Math.floor(Math.random() * 5)];
                    scheduleDay.title = `${scheduleDay.city} ${scheduleDay.activity}`;
                }
            }
            
            
            schedule.push(scheduleDay);
            
            tripLength++;
        }
        trip.days = tripLength;
        return schedule;
    
    }
    var createCoordinates = () => {
        var coordinates = [];
        for(var x = 0; x < trip.cities.length; x++) {
            let coordinateObj = {};
            coordinateObj.left = Math.floor(Math.random() * 600);
            coordinateObj.top = Math.floor(Math.random() * 600);
            coordinates.push(coordinateObj);
        }
        return coordinates;
    
    }
    trip.schedule = createSchedule();
    trip.coordinates = createCoordinates();
    
    
    return trip;
    
}


for(var x = 0; x < 33; x++) {
    Trip.create(createTripObject(x));

}

