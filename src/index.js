module.exports = function getZerosCount(number, base) {

    let primeNumbers = takingPrimes(base)
    let degr = 0
    let middle = base
    let maxDivider = 0
    let count = 0
    let zerosCount = 0

    for (let i = 0; primeNumbers[i] <= base; i++) {
        if (base % primeNumbers[i] === 0) {
            maxDivider = primeNumbers[i]
        }
    }

    while (middle % maxDivider === 0) {
        degr++
        middle /= maxDivider
    }

    while (number > 0) {
        number = Math.floor(number / maxDivider)
        count += number;
    }

    zerosCount = Math.floor(count / degr)

    function takingPrimes(n) {
        let arr = []
        let primeNumbers = []

        arr[1] = 0

        for (let i = 2; i <= n; i++)
            arr[i] = 1

        for (let i = 2; i * i <= n; i++) {
            if (arr[i] === 1) {
                for (let l = i * i; l <= n; l += i) {
                    arr[l] = 0
                }
            }
        }

        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] === 1)
                primeNumbers.push(i)
        }

        return primeNumbers
    }

    return zerosCount
}
