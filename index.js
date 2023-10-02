const crypto = require('crypto');

function getHash(input) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(input, 'salt', 100000, 512, 'sha512', (err, derivedKey) => {
      if (err) {
        reject(err);
      } else {
        resolve(derivedKey.toString('hex'));
      }
    });
  });
}

async function compareHashes() {
  try {
    // Generando  hashes for 'b' and 'c'
    const hashB = await getHash('b');
    const hashC = await getHash('c');

    // Generando a Generando hashes 'a' (used in getHash function)
    const hashA = await getHash('a');

    console.log('Generando hashes "a":', hashA);
    console.log('Generando hashes "b":', hashB);
    console.log('Generando hashes "c":', hashC);

    // Compare the hashes
    if (hashA !== hashB && hashA !== hashC && hashB !== hashC) {
      console.log('hashes son diferentes ');
    } else {
      console.log('Los hashes esperados no son diferentes ');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

compareHashes();
