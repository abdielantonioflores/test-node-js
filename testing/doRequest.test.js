const { expect } = require('chai');
const sinon = require('sinon');
const https = require('https');

function doRequest(callback) {
  https.request("https://www.google.com", res => {
    let data = '';
    res.on('data', chunk => {
      data += chunk;
    });
    res.on('end', () => {
      callback(data);
    });
  }).end();
}

describe('doRequest', () => {
  it('deberian recibir datos de Google (null input)', (done) => {
    // Create a sandbox for Sinon
    const sandbox = sinon.createSandbox();

    // Stub the 'https.request' method
    const requestStub = sandbox.stub(https, 'request');

    // creamos tada de prueba para la respuesta 
    const fakeResponse = {
      on: sandbox.stub(),
      end: sandbox.stub()
    };

    // configuracion para retornar los datos de prueba 
    requestStub.callsFake((_options, callback) => {
      callback(fakeResponse);
      return fakeResponse;
    });

    //Configurar el comportamiento de la respuesta falsa para los eventos « datos » y « fin »
    fakeResponse.on.withArgs('data').callsFake((event, eventCallback) => {
      eventCallback('Google Data');
    });

    fakeResponse.on.withArgs('end').callsFake((event, eventCallback) => {
      eventCallback();
    });

    doRequest((data) => {
      // comparamos la data recibida 
      expect(data).to.equal('Google Data');
      sandbox.restore();
      // estauramos  sinon 
      done();
    });
  });

  describe('doRequest', () => {
    it('deberian recibir datos de Google (string input)', (done) => {

      const sandbox = sinon.createSandbox();

      const requestStub = sandbox.stub(https, 'request');

      const fakeResponse = {
        on: sandbox.stub(),
        end: sandbox.stub()
      };

      requestStub.callsFake((_options, callback) => {
        callback(fakeResponse);
        return fakeResponse;
      });

      fakeResponse.on.withArgs('data').callsFake((event, eventCallback) => {
        eventCallback('Google Data');
      });

      fakeResponse.on.withArgs('end').callsFake((event, eventCallback) => {
        eventCallback();
      });

      doRequest((data) => {

        expect(data).to.equal('Google Data');
        sandbox.restore();
        done();
      });
    });
  });

});
