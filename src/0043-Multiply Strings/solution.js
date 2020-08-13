/**
 * 题述：大数相乘
 * 思路：模拟手算过程
 * 时间复杂度：m * n
 * 空间复杂度：m + n
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';

    let sum = '0';
    for (let j = num2.length - 1; j >= 0; j--) {
        const bit2 = num2[j];
        let bitSum = '';
        let carry = 0;
        for (let i = num1.length - 1; i >= 0; i--) {
            const bit1 = num1[i];
            const temp = bit2 * bit1 + carry;
            bitSum = `${temp % 10}${bitSum}`;
            carry = (temp / 10) | 0;
        }
        if (carry > 0) {
            bitSum = `${carry}${bitSum}`;
        }
        bitSum = `${bitSum}${new Array(num2.length - 1 - j).fill('0').join('')}`;
        sum = addStrings(sum, bitSum);
    }
    return sum.replace(/^0+/, '');
}

/**
 * 题述：真.大数相加，更简单的考法是数字字符串是逆序的
 * 思路：模拟进位
 * 时间复杂度：max(m, n), m 和 n 分别为 num1 和 num2 的长度
 * 空间复杂度：max(m, n)
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings(num1, num2) {
    let result = '';
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carryBit = 0;
    while (i >= 0 || j >= 0 || carryBit === 1) {
        const sum = ~~num1[i] + ~~num2[j] + carryBit;
        carryBit = sum >= 10 ? 1 : 0;
        result = `${sum % 10}${result}`;
        i--;
        j--;
    }
    return result;
}
