import { expect } from 'chai';
import 'mocha';
import { hello } from '../index';
import { TestCase } from '../index';
import { ExtensionClass } from '../index';

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
    describe('Extension Class', () => {
        const theExtensionCase = new ExtensionClass({
            age: 20,
            city: 'London',
            gender: 'Male',
            name: 'Siraj',
        });
        it ('should return the same age that is defined', () => {
            expect(theExtensionCase.age).to.equal(20);
        });
        it ('should return the same gender that is defined', () => {
            expect(theExtensionCase.gender).to.equal('Male');
        });
        it('should return the same city that is inputted', () => {
            expect(theExtensionCase.city).to.equal('London');
        });
        it('should return the same name that is inputted', () => {
            expect(theExtensionCase.name).to.equal('Siraj');
        });
        describe ('Sentences', () => {
            it('should return full sentence for age', () => {
                expect(theExtensionCase.whatAge()).to.equal('Siraj is 20 year(s) old.');
            });
            it('should return full sentence for gender', () => {
                expect(theExtensionCase.whatGender()).to.equal('Siraj is a Male.');
            });
            it(`should return '' for undefined profession`, () => {
                expect(theExtensionCase.possibleProfession()).to.equal('');
            });
        });
    });
    describe ('Extension Class', () => {
        const theExtensionCase = new ExtensionClass({
            age: 20,
            city: 'London',
            gender: 'Male',
            name: 'Siraj',
        });
        it ('should return a full sentence from whatAll', () => {
            // tslint:disable-next-line:max-line-length
            expect(theExtensionCase.whatAll()).to.equal(`This is the information for Siraj who lives in London and is 20 years old.
        They are a Male `);
        });
    });
    describe ('Full Extension Class', () => {
        const theExtensionCase = new ExtensionClass({
            age: 20,
            city: 'London',
            gender: 'Male',
            name: 'Siraj',
            profession: 'Software Developer',
        });
        it ('should return a full sentence from whatAll', () => {
            // tslint:disable-next-line:max-line-length
            expect(theExtensionCase.whatAll()).to.equal(`This is the information for Siraj who lives in London and is 20 years old.
        They are a Male and works as a Software Developer`);
        });
    });
});
