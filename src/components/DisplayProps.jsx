function displayProps(rows, columns) {
    const date = "20";
    const sRows = rows.toString();
    const sCols = columns.toString();
    if (date == sRows + sCols) {
        console.log('hello')
        return (<div>
            <h1>Hey we are Learning React</h1>
        </div>)
    }
    
  }

  export default displayProps
