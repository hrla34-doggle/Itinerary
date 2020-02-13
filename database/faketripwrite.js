const fakeTrip = require('./tripfaker.js');
const fs = require('fs');

const start = Date.now();

var stream = fs.createWriteStream('./SeedData/sampleData.json', 'utf-8');

function write10MillTrips(writer, encoding, callback) {
  let i = 0;
  const numTrips = 500000;

  writer.write('[', encoding);

  write();
  function write() {
    let ok = true;

    

    do {
      i++;
      let data = JSON.stringify(fakeTrip(i), null, 2);

      if (i === numTrips) {
        // Last time!
        writer.write(data, encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        data += ',\n';
        ok = writer.write(data, encoding);
      }
    } while (i < numTrips && ok);

    if (i < numTrips) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
    }
  }
}

write10MillTrips(stream, 'utf-8', () => {
  stream.write(']', 'utf-8')
  stream.end();

  console.log((Date.now() - start)/1000);
});