export interface Result {
    isSuccess: boolean,
    data?: any,
    message?: string,
    other?: any
} 

export interface EmailMessage {
    fromAddress: string;
    toAddress: string;
    ccAddress?: string;
    bccAddress?: string;
    subject: string;
    encoding?: string;
    mailFormat?: string;
    askReceipt?: string;
    content: string;
}