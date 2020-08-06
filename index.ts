const compareVersion: (v1: string, v2: string) => number = (v1: string, v2: string): number => {
    let v1_arr: Array<string> = v1.split('.')
    let v2_arr: Array<string> = v2.split('.')

    const len = Math.max(v1_arr.length, v2_arr.length)

    while (v1_arr.length < len) {
        v1_arr.push('0')
    }
    while (v1_arr.length < len) {
        v2_arr.push('0')
    }


    for (let i = 0;i < len;i++) {
        const num1 = parseInt(v1_arr[i])
        const num2 = parseInt(v2_arr[i])

        if (num1 > num2) {
            return 1
        } else if (num1 < num2) {
            return -1
        }
    }
    return 0
}

export default compareVersion