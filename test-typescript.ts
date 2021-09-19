
// Types

const number: number = 1
const string: string = 'string'
const boolean: boolean = true
const array: Array<string> = [ 'value', 'value' ]
const any: any = 'any'



// My types

type mystring = string
type mystringornumber = string | number
type nullundef = number | null | undefined

const mystring: mystring = 'Misha'
const mystringornumber: mystringornumber = 'Misha'
const nullundef: nullundef = null



// Functions

function foo ( arg: string ): void {
    console.log( `log ${arg}` )
}

function infinite (): never {
    while ( true ) {
        console.log( 'while' )
    }
}

foo( string )



// Interfaces


interface User {
    age: number,
    name?: string,
    readonly username: string,
    contacts: {
        readonly phone: string,
        mail?: string
    }
}

const user1: User = {
    age: 24,
    name: 'Misha',
    username: 'misha',
    contacts: {
        phone: '+7 (999) 999 99 99',
        mail: 'misha@yandex.ru'
    }
}
const user2 = {} as User
const user3 = <User>{}


// Extend interface

interface SuperUser extends User {
    getUsername: () => string
}

const superuser1: SuperUser = {
    age: 21,
    name: 'Stas',
    username: 'stas',
    contacts: {
        phone: '+7 (999) 999 99 99',
        mail: 'stas@gmail.com'
    },
    getUsername (): string {
        return this.username
    }
}

class AdminUser implements SuperUser {
    age = 23
    username = 'maxkuz'
    contacts = {
        phone: '+7 (999) 999 99 99'
    }

    getUsername (): string {
        return this.username
    }
}

interface Styles {
    [ key: string ]: string
}

let style1: Styles = {
    background: 'black',
    color: 'white'
}



// Enums

enum Music {
    Pop,
    Rock,
    Rap
}

console.log( Music.Rock )
console.log( Music[ 2 ] )

enum Hobbies {
    Programming = 'Programming',
    Sport = 'Sport',
}

console.log( Hobbies.Programming )



// Functions

interface NotCalculated {
    result: undefined,
    error: boolean
}
interface Calculated {
    result: number
}


function calculate(): NotCalculated
function calculate( number1: number ): NotCalculated
function calculate( number1: number, number2: number ): Calculated

function calculate ( number1?: number, number2?: number ) {
    if ( ( !number1 && !number2 ) || number1 && !number2 ) {
        return { result: undefined, error: true }
    }
    return {
        result: number1 + number2
    }
}

console.log( calculate() )
console.log( calculate( 1 ) )
console.log( calculate( 1, 1 ) )



// Классы

class TypeScript {

    // -------------------
    // То что ниже
    /*
    readonly version: string // = ''
    constructor ( version: string ) {
        this.version = version
    }
    */
    // Идентично
    constructor ( readonly version: string ) {}
    // version сам создасться
    // -------------------

}



abstract class Component {
    abstract render(): void
    abstract mounted(): void
}

class MyCompoent extends Component {
    render () {
        console.log( 'Render' )
    }
    mounted () {
        console.log( 'Mounted' )
    }
}




// Guards

function determinate ( value: number | string ): string {
    if ( typeof value === 'number' ) {
        return 'Number'
    }
    return 'String'
}

function determinateComponent ( value: Component | MyCompoent ): string {
    if ( value instanceof Component ) {
        return 'Component'
    }
    return 'MyCompoent'
}

type UserType = 'admin' | 'user'

function setUserType ( value: UserType ): void {
    console.log( value )
}

setUserType( 'admin' )
//setUserType( 'default' ) // error




// Generic type

const numbers: Array<number> = [ 1, 2, 3 ]

function reverse<Custom>( array: Custom[] ): Custom[] {
    return array.reverse()
}

reverse( numbers )
reverse( [] )
//reverse( 'test' ) // error



// Operators

interface Person {
    name: string,
    age: number,
    job: boolean
}

type PersonKeys = keyof Person

let key: PersonKeys = 'name'
key = 'age'
// key = 'any' // error


type CustomTypes = {
    name: string
    age: number
    job: boolean
}

type ExcludeCustomTypes = Exclude<keyof CustomTypes, 'job' | 'age'>
// or
type PickCustomTypes = Pick<CustomTypes, 'name' | 'age'>

// let testType: PickCustomTypes = 'name' // не работате


