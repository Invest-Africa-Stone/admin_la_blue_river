import { ProjectStateEnum, ProjectTypeEnum } from "../enums"
import { imagesType } from "./imagesType"

export interface Project {
    _id?: string
    projectType: ProjectTypeEnum
    ref: string
    name: string
    description: string
    adress: string
    city: string
    country: string
    images?: imagesType[]
    amount: amountType
    stockValue: number
    rente: number
    purchasePrice: number
    yearsOfOperations: number
    totalNumberOfStock: number
    numberOfStockRemaining: number
    minimumStockPurchase: number
    investorsStockID?: string[]
    state?: ProjectStateEnum
    startCampaignAt?: Date
    endingCampaignAt?: Date
    createAt?: Date   
}
export interface amountType {
    acquisition: number
    fees: number
    reserve: number
    ourRemuneration: number
}
