// Viết hàm convertDecimalToHexaDecimal(number | arrayNumber)
function convertDecimalToHexaDecimal(data) {
    if (typeof data == "number") {
        if (data == 0) {
            return "0"
        } else {
            var hexDigits = "0123456789ABCDEF" 
            let convertResult = " "
            while (data > 0) {
                convertResult = hexDigits[data % 16] + convertResult
                data = Math.floor(data/16)
            }
            return convertResult
        }
    } else if (Array.isArray(data)) {
        let convertResultArray = []
        for (let i = 0; i < data.length; i++) {
            if (data[i] == 0) {
                convertResultArray.push("0")
            } else {
                var hexDigits2 = "0123456789ABCDEF" 
                let convertValue = ""
                while (data[i] > 0) {
                    convertValue = hexDigits2[data[i] % 16] + convertValue
                    data[i] = Math.floor(data[i]/16)
                }
                convertResultArray.push(convertValue)
            }
        }
        return convertResultArray
    } else {
        return "Error"
    }
}
// Function Unit test hàm convertDecimalToHexaDecimal
function testConvertDecToHexa() {
    let testArrays = [
        [12,"C"],
        [1327,"52F"],
        [
            [12,1327],["C","52F"]
        ],
        ["string","Error"],
        [undefined,"Error"],
        [null,"Error"],
        [NaN,"Error"],
        [{},"Error"]
    ]
    for (let i = 0; i < testArrays.length; i++) {
        let testCase = testArrays[i]
        let result = convertDecimalToHexaDecimal(testCase[0])
        if (result = testCase[1]) {
            console.log("Passed")
        } else {
            console.log("Failed")
        }
    }
}
testConvertDecToHexa();
