// Interface to hold Result data
export interface Result {
    isSuccess: boolean,
    data?: any,
    message?: string,
    other?: any
}

export enum AppendCommonActionType {
    new='new',
    update='update'
}
