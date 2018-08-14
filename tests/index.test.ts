import { hello } from '../index';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {

    it('should return Hello World!', () => {
        const result = hello();
        expect(result).to.equal('Hello World!');
        
    });
});