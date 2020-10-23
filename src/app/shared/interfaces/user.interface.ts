export interface GetUserList {
    id_city: number
}

export interface UserRegister {
    names: number,
    surnames: string,
    mobile: number,
    id_document_type: number,
    identification_number: number,
    birthday_date: Date,
    id_branch_office: number
}