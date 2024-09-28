export interface User {
    _id?: string
    gender: string
    token: string
    firstname: string
    lastname: string
    email: string
    phone?: string
    birthDate?: Date
    city?: string
    country?: string
    phoneVerify?: boolean
    emailVerify?: boolean
    lastLoginAt?: Date
    createAt?: Date
}
