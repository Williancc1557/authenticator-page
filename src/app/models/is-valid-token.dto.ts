export interface IsValidTokenDto {
    statusCode: number,
    body: {
        email: string,
        iat: number,
        exp: number
    }
}