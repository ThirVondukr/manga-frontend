export interface ITimeAgoArgs {
    seconds: number
    minutes: number
    hours: number
    days: number
    years: number
}

export interface ITimeAgoConverter {
    convert(args: ITimeAgoArgs): string;
}
