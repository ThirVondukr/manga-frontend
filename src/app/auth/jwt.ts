export interface IJWTTokenHeader {
    alg: string | "HS256"
    typ: "JWT"
}

export type IJWTTokenPayload<Claims = {}> = Claims & {
    exp: number
    sub: string
};

export interface IJwtToken<Claims> {
    header: IJWTTokenHeader
    payload: IJWTTokenPayload<Claims>
    raw: string
    isExpired: boolean
}

export class JWTToken<Claims = {}> implements IJwtToken<Claims> {
    get isExpired(): boolean {
        const now = Math.floor(new Date().getTime() / 1000)
        return now > this.payload.exp;
    }

    constructor(
        public readonly header: IJWTTokenHeader,
        public readonly payload: IJWTTokenPayload<Claims>,
        public readonly raw: string,
    ) {
    }

    static fromString<Claims extends IJWTTokenPayload>(string: string): IJwtToken<Claims> {
        const [headerRaw, payloadRaw] = string.split('.');
        const header: IJWTTokenHeader = JSON.parse(atob(headerRaw));
        const payload: IJWTTokenPayload<Claims> = JSON.parse(atob(payloadRaw));
        return new this(header, payload, string);
    }
}
