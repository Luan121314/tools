import { CONSTANTS } from 'tools/Contants';

export function whatsAppLinkWithText(text: string): string {
    return `${CONSTANTS.whatsAppURL}/?text="${text}"`;
}

export function whatsAppLinkWithNumber(number: number, text: string): string {
    return `${CONSTANTS.whatsAppURL}/${number}/?text=${text}`;
}
