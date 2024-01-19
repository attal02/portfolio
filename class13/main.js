let count = 0
let record = 0

document.querySelector('#counter').addEventListener('click', add)
document.querySelector('#clear').addEventListener('click', clear)
document.querySelector('#clearRecord').addEventListener('click', clearRecord)

function add() {
    count = count + 1
    document.querySelector('#counterText').innerHTML = count

    if (count > record) {
        record = count
        document.querySelector('#recordText').innerHTML = record
    }
}


function clear() {
    count = 0
    document.querySelector('#counterText').innerHTML = count
}

function clearRecord() {
    record = 0
    count = 0
    document.querySelector('#recordText').innerHTML = record
    document.querySelector('#counterText').innerHTML = count
}

