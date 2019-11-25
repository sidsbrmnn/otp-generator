export interface IPasswordOptions {
    alphabets?: boolean;
    digits?: boolean;
    upperCase?: boolean;
}

const digits = '0123456789';
const alphabets = 'abcdefghijklmnopqrestuvwxyz';
const upperCase = alphabets.toUpperCase();
const defaultOptions: IPasswordOptions = {
    alphabets: true,
    digits: true,
    upperCase: true,
};

function generateIndex(max: number): number {
    return Math.floor(Math.random() * max);
}

export function generatePassword(
    length: number = 10,
    options: IPasswordOptions = defaultOptions,
): string {
    options = Object.assign(defaultOptions, options);
    if (!options.alphabets) {
        options.upperCase = false;
    }

    const allowedChars =
        ((options.digits || '') && digits) +
        ((options.alphabets || '') && alphabets) +
        ((options.upperCase || '') && upperCase);

    let password = '';

    for (let index = 0; index < length; index++) {
        password += allowedChars[generateIndex(allowedChars.length - 1)];
    }

    return password;
}
