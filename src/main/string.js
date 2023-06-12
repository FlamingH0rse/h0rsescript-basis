class MyString {
    constructor(value) {
        this.value = value.toString();
    }

    toString() {
        return this.value;
    }

    valueOf() {
        return this.value;
    }

    charAt(index) {
        return this.value.charAt(index);
    }

    charCodeAt(index) {
        return this.value.charCodeAt(index);
    }

    codePointAt(index) {
        return this.value.codePointAt(index);
    }

    concat(...strings) {
        return new MyString(this.value.concat(...strings));
    }

    includes(searchValue, position) {
        return this.value.includes(searchValue, position);
    }

    endsWith(searchValue, length) {
        return this.value.endsWith(searchValue, length);
    }

    startsWith(searchValue, position) {
        return this.value.startsWith(searchValue, position);
    }

    indexOf(searchValue, fromIndex) {
        return this.value.indexOf(searchValue, fromIndex);
    }

    lastIndexOf(searchValue, fromIndex) {
        return this.value.lastIndexOf(searchValue, fromIndex);
    }

    localeCompare(compareString, locales, options) {
        return this.value.localeCompare(compareString, locales, options);
    }

    match(regexp) {
        return this.value.match(regexp);
    }

    matchAll(regexp) {
        return this.value.matchAll(regexp);
    }

    normalize(form) {
        return this.value.normalize(form);
    }

    padEnd(targetLength, padString) {
        return this.value.padEnd(targetLength, padString);
    }

    padStart(targetLength, padString) {
        return this.value.padStart(targetLength, padString);
    }

    repeat(count) {
        return this.value.repeat(count);
    }

    replace(searchValue, replaceValue) {
        return this.value.replace(searchValue, replaceValue);
    }

    search(regexp) {
        return this.value.search(regexp);
    }

    slice(start, end) {
        return this.value.slice(start, end);
    }

    split(separator, limit) {
        return this.value.split(separator, limit);
    }

    substring(start, end) {
        return this.value.substring(start, end);
    }

    toLocaleLowerCase(locale) {
        return this.value.toLocaleLowerCase(locale);
    }

    toLocaleUpperCase(locale) {
        return this.value.toLocaleUpperCase(locale);
    }

    toLowerCase() {
        return this.value.toLowerCase();
    }

    toUpperCase() {
        return this.value.toUpperCase();
    }

    trim() {
        return this.value.trim();
    }

    trimStart() {
        return this.value.trimStart();
    }

    trimEnd() {
        return this.value.trimEnd();
    }
}