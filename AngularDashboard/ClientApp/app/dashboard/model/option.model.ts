export class Option {

    constructor(value: string) {
        this.value = value;
        this.text = value;
        this.checked = false;
    }

    value: string;
    text: string;
    checked: boolean;
}