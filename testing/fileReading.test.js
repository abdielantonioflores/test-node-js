const fs = require('fs');
const { expect } = require('chai');

// Describe your test suite
describe('Test de File Reading ', () => {
  it('debe leer el contenido de Multitask.js y comparar con "hello"  ', (done) => {
    // leemos el contenido del archivo  'Multitask.js'
    fs.readFile('Multitask.js', 'utf8', (err, data) => {
      if (err) {
        //manejo de error si encuentra el archivo o no 
        done(err);
      } else {
        // comparamos el contenido del archivo  si es igual a lo esperado en este caso " hello "
        expect(data.trim()).to.equal('hello');
        done();
      }
    });
  });
});
