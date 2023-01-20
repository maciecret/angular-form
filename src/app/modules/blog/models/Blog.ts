//MODEL FOR MOCK BOOKS// ACCEPTS DATA WITH THIS FORM
export interface Blog{
    id?: number, //add ? to be optional since no id unless added, avoid error message
    Title: string,
    Description: string,
    Author: string,
    Comment: string
}