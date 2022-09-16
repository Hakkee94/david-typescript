// type String, Number, Boolean, Null, Undefined, ... unknown, any

const myStr: string = 'qwerty'

const myNumber: number = 344

const myBool: boolean = false

const myNull: null = null

const myUnd: undefined = undefined

let myUnknown: unknown // что то там есть

let myAny: any // отключаем типизацию для myAny

// data structures Array, Object, ... new Set, new Map, HTMLCollections ... tuple, enums

const myArrN: number[] = [1,2,3,4,5]
const myArrS: string[] = ["asd", 'asd']
const myTuple: [number, string, any, string] = [22, 'string', NaN, ""]

const myObj: {name: string, age: number} = {name: "Ivan", age: 33}

enum Keys {
    Q,
    W,
    E,
    R,
    T
}

enum Actions {
    RUN = "RUN",
    HIDE = "HIDE",
    GET_DATA = 'GET_DATA'
}

interface IActions {
    RUN: string
    HIDE: string
    GET_DATA: string
}

type PersonType = (string | IActions)

const myPerson: PersonType = Actions

interface IHuman<T> {
    name: string,
    age: number,
    homeland: T
}

type CityType = {
    name: string;
    coords: unknown;
}

interface ICity {
    name: string,
    zipCode: number
}

const myHuman1: IHuman<CityType> = {
    name: "Ivan",
    age: 23,
    homeland: {
        name: "Kirov",
        coords: undefined
    }
}

const myHuman2: IHuman<ICity> = {
    name: "Ivan",
    age: 23,
    homeland: {
        name: "Kirov",
        zipCode: 12344
    }
}


// functions

function printText(name: string, age: number): string {
    return name + age
}

function logText(name: string, age: number): void { // тип данных когда функция ничего не возвращает
    console.log(name + age)
}

function getError(err: string): never {
    throw new Error(err)
}