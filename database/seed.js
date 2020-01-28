const Trip = require('./index');

var TripAdjectives = ['Gorgeous', 'Fun', 'Amazing', 'Crazy', 'Adventurous'];
var TripStyle = [' trip', ' escapade', ' vacation', ' getaway', ' experience']
var TripDetails = [' in the middle of', ' around', ' through', ' right in', ' in'];
var TripEnding = [' the ghetto', ' the ruins', ' the country', ' the best towns', ' unchartered territory'];
var TripLocation = ['Egypt', 'Kenya', 'Morocco', 'South_Africa','China', 'Israel', 'India', 'Japan', 'South_Korea', 'Thailand', 'Vietnam','France', 'Germany', 'Greece', 'Ireland', 'Italy', 'The_Netherlands', 'Norway', 'Poland', 'Portugal', 'Russia', 'Spain', 'Switzerland', 'The_United_Kingdom','The_United_States', 'Costa_Rica', 'Mexico', 'Canada','Brazil', 'Peru','Australia', 'New_Zealand', 'Colombia'];

var Days = [20, 6, 3, 10, 14];
var cities = {
    Egypt: ['Cairo', 'Alexandria', 'Luxor', 'Aswan', 'Giza'],
    Kenya: ['Nairobi', 'Nakuru'],
    Colombia: ['Bogota', 'Barranquilla', 'Medellin', 'Cartagena'],
    Morocco: ['Casablanca', 'Fez', 'Marrakech', 'Tinghir'],
    South_Africa: ['Cape_Town', 'Johannesburg', 'Pretoria', 'Soweto'],
    China: ['Beijing', 'Shanghai', 'Xian', 'Chengdu', 'Hangzhou', 'Guangzhou', 'Chongqing', 'Nanjing', 'Lhasa'],
    Israel: ['Jerusalem', 'Tel_Aviv', 'Tiberias'],
    India: ['Agra', 'Delhi', 'Jaipur', 'Calcutta'],
    Japan: ['Tokyo', 'Osaka', 'Kyoto', 'Asakusa', 'Hiroshima'],
    South_Korea: ['Seoul', 'Busan'],
    Thailand: ['Bangkok', 'Sukhothai', 'Chiang_Mai', 'Dammoen_Saduak'],
    Vietnam: ['Danang', 'Hanoi', 'Hue', 'Ho_Chi_Minh_City'],
    France: ['Avignon', 'Cannes', 'Lyon', 'Paris', 'Bordeaux', 'Giverny', 'Nice', 'Versailles'],
    Germany: ['Berlin', 'Dresden', 'Frankfurt', 'Cologne', 'Worms', 'Hamburg', 'Munich'],
    Greece: ['Athens', 'Olympia', 'Santorini', 'Corfu', 'Delphi'],
    Ireland: ['Blarney', 'Dublin', 'Cork', 'Galway', 'Limerick'],
    Italy: ['Capri', 'Florence', 'Rome', 'Pisa', 'Venice', 'Naples', 'Pompeii'],
    The_Netherlands: ['Amsterdam', 'Delft', 'Rotterdam', 'Groningen'],
    Norway: ['Bergen', 'Oslo', 'Lillehammer'],
    Poland: ['Warsaw', 'Gdansk', 'Zakopane', 'Krakow'],
    Portugal: ['Coimbra', 'Mateus', 'Porto', 'Lisbon'],
    Russia: ['Moscow', 'Saint_Petersburg', 'Kazan'],
    Spain: ['Madrid', 'Cordoba', 'Barcelona', 'Granada', 'Seville', 'Toledo', 'Valencia', 'Bilbao'],
    Switzerland: ['Zurich', 'Bern', 'Lucerne', 'St._Moritz'],
    The_United_Kingdom: ['Edinburgh', 'Liverpool', 'London', 'York', 'Oxford', 'Glasgow', 'Cardiff', 'Manchester'],
    The_United_States: ['Juneau', 'Anchorage', 'Fairbanks', 'Seward'],
    Costa_Rica: ['San_Jose', 'Monteverde', 'Liberia', 'Tortuguero'],
    Mexico: ['Mexico_City', 'Cancun', 'Tulum', 'Chichen_Itza', 'Cozumel', 'Puerto_Vallarta'],
    Canada: ['Montreal', 'Quebec_City', 'Ottawa', 'Toronto', 'Vancouver', 'Banff'],
    Brazil: ['Rio_de_Janeiro', 'Sao_Paulo', 'Brasilia', 'Salvador'],
    Peru: ['Cuzco', 'Lima', 'Puno'],
    Australia: ['Melbourne', 'Sydney', 'Canberra', 'Adelaide'],
    New_Zealand: ['Auckland', 'Christchurch', 'Picton', 'Wellington'],
  };

var createTripName = () => {
    var TripName = "";
    TripName+=TripAdjectives[Math.floor(Math.random() * 4)];
    TripName+=TripStyle[Math.floor(Math.random() * 4)];
    TripName+=TripDetails[Math.floor(Math.random() * 4)];
    TripName+=TripEnding[Math.floor(Math.random() * 4)];
    return TripName;
}

var createTripObject = (x) => {
    var trip = {};
    trip.name = createTripName();
    trip.location = TripLocation[x]
    trip.days = Days[Math.floor(Math.random() * 4)];
    trip.cities = cities[trip.location];
    trip.mapPic = `https://ebtrafalgar.s3-us-west-1.amazonaws.com/Map+pictures/${trip.location}.png`;
    trip.name+=` of ${trip.location}`;
    
    return trip;
    
}

for(var x = 0; x < 33; x++) {
    Trip.create(createTripObject(x));
}