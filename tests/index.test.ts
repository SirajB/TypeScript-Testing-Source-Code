import { expect } from 'chai';
import 'mocha';
import { hello } from '../index';

describe('Hello function', () => {

    it('should return Hello World!', () => {
        const result = hello();
        expect(result).to.equal('Hello World!');
    });
});
