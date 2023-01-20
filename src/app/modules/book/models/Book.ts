//MODEL FOR MOCK BOOKS// ACCEPTS DATA WITH THIS FORM
export interface Book{
    id?: number, //add ? to be optional since no id unless added, avoid error message
    Title: string,
    Author: string,
    Description: string
}