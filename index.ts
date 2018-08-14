export const hello = () => 'Hello World!';

interface ITestCase {
    city: string;
    name: string;
}

interface IExtensionClass extends ITestCase {
    age: number;
    gender: string;
    profession?: string;
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

// tslint:disable-next-line:max-classes-per-file
export class ExtensionClass extends TestCase {
    public gender: string;
    public age: number;
    public profession?: string;
    constructor(options: IExtensionClass) {
        super(options);
        this.age = options.age;
        this.gender = options.gender;
        this.profession = options.profession;
    }
    public possibleProfession() {
        if (this.profession !== undefined) {
            return `and works as a ${this.profession}`;
        } else {
            return '';
        }
    }
    public whatAge() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
    public whatGender() {
        return `${this.name} is a ${this.gender}.`;
    }
    public whatProfession() {
        return `${this.name} works as a ${this.profession}.`;
    }
    public whatAll() {
        return `This is the information for ${this.name} who lives in ${this.city} and is ${this.age} years old.
        They are a ${this.gender} ${this.possibleProfession()}`;
    }
}