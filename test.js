console.log('hello') 

function hello1(name) {
    return "hello1, " + name
}

const hello2 = (name) => {
    return `hello2, ${name}` 
}

const hello3 = name => `hello3, ${name}`

console.log(hello1('test1'))
console.log(hello2('test2'))
console.log(hello3('test3'))

function showHello(name, hello) {
    console.log(hello(name))
}

showHello('test4', hello1)
showHello('test5', hello2)
showHello('test6', hello3)