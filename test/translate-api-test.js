import server from '../server.js'
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'

chai.should()
chai.use(chaiHttp)
/*
  Unit test for translate api
 */
describe("Translate api",()=>{
    describe("POST /translate", () => {
        it("It should translate given text in specified language.", (done) => {
            // this.timeout(15000);
            const task = {
               text:"hello! what are you",
               slang:"en",
               tlang:"hi"
            };
            chai.request(server)                
                .post("/translate")
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                    response.body.should.have.property('translatedText')
                    response.body.translatedText.should.be.a('string')
                    done()
        });
    });})
})
