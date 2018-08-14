export const hello = () => 'Hello World!';

interface ITestCase {
    city: string;
    name: string;
}

export class TestCase {
    public name: string;
    public city: string;
    constructor(options: ITestCase) {
        this.city = options.city;
        this.name = options.name;
        }
    public whatName() {
        return `${this.name} lives in ${this.city}`;
    }
}
                                