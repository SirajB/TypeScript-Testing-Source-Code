import { expect } from 'chai';
import 'mocha';
import { hello } from '../index';
import { TestCase } from '../index';

describe('Hello function', () => {

    it('should return Hello World!', () => {
        const result = hello();
        expect(result).to.equal('Hello World!');
    });
});

describe('Test Class', () => {
    const theTestCase = new TestCase({
        city: 'London',
        name: 'Siraj',
        });
    it('should return the same city that is inputted', () => {
        expect(theTestCase.city).to.equal('London');
    });
    it('should return the same name that is inputted', () => {
        expect(theTestCase.name).to.equal('Siraj');
    });
    describe ('Test Class . whatName', () => {
        it('should return the correct string', () => {
            expect (theTestCase.whatName()).to.equal('Siraj lives in London');
        });
    });
});