class Person {
    constructor(text) {
        const textArr = text.split(' ')

        this.name = textArr[0]
        this.surname = textArr[1]
        this.age = textArr[2]
    }

    getAge() {
        return this.age
    }
}

