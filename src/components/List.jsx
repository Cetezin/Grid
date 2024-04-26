function List(start, end, step=1){
    if(typeof end === 'undefined'){
        end = start
        start = 0
    }

    let range = []
    for(let i=start; i<end; i+=step){
        range.push(i)
    }
    return range
}

export default List


