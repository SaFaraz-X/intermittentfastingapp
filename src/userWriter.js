function read() {
    const fs = require('fs')

    alert()

    fs.readFile('./Users.JSON', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        alert('File data:', jsonString) 
    })
}