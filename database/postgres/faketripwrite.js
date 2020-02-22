const fakeTrip = require('./tripfaker.js');
const fs = require('fs');
const path = require('path');

const cliArg = parseInt(process.argv[2]) || 1;

const start = Date.now();

// var stream = fs.createWriteStream('./database/SeedData/sampleData3.tsv', 'utf-8');
var stream = fs.createWriteStream(path.join(__dirname, `./SeedData/optionals/sampleOptionals${cliArg}.tsv`), 'utf-8');
// var stream = fs.createWriteStream('./SeedData/sampleData.tsv', 'utf-8');

function write10MillTrips(writer, encoding, callback, fakerFunction) {
  let i;

  // i = 1 + ((cliArg - 1) * 1000000)
  // const numTrips = 1000000 * cliArg;

  i = 1;
  const numTrips = 2;

  write();
  function write() {
    let ok = true;

    do {
      const numSchedules = Math.ceil(Math.random() * 3);

      for (var j = 0; j < numSchedules; j++) {
        let data = fakerFunction(i);

        if (i === numTrips) {
          // Last time!
          data += '\n';
          writer.write(data, encoding, callback);
        } else {
          // See if we should continue, or wait.
          // Don't pass the callback, because we're not done yet.
          data += '\n';
          ok = writer.write(data, encoding);
        }
      }
      
      i++;
    } while (i <= numTrips && ok);

    if (i < numTrips) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
    }
  }
}

write10MillTrips(stream, 'utf-8', () => {
  stream.end();

  console.log((Date.now() - start)/1000);
}, fakeTrip.fakeOptionals);


// Code for JSON file
// function write10MillTrips(writer, encoding, callback) {
//   let i = 0;
//   const numTrips = 10;

//   writer.write('[', encoding);

//   write();
//   function write() {
//     let ok = true;

//     do {
//       i++;
//       let data = JSON.stringify(fakeTrip(i), null, 2);

//       if (i === numTrips) {
//         // Last time!
//         writer.write(data, encoding, callback);
//       } else {
//         // See if we should continue, or wait.
//         // Don't pass the callback, because we're not done yet.
//         data += ',\n';
//         ok = writer.write(data, encoding);
//       }
//     } while (i < numTrips && ok);

//     if (i < numTrips) {
//       // Had to stop early!
//       // Write some more once it drains.
//       writer.once('drain', write);
//     }
//   }
// }

// write10MillTrips(stream, 'utf-8', () => {
//   stream.write(']', 'utf-8')
//   stream.end();

//   console.log((Date.now() - start)/1000);
// });