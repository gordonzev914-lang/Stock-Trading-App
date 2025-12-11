import {stockMarket} from "./data.js"
import readline from "readline-sync"
export function searchStock(identifier){
const the_desired_stock=stockMarket.stocks.filter((stock)=>identifier===stock.id||identifier===stock.name)
    if(the_desired_stock){
        return the_desired_stock
    }
    else{
        console.log('Nothing found')
        return the_desired_stock
    }
}
export function filterStocksByPrice(givenPrice,above){
    if(typeof givenPrice==="number"){
        if(above===true){
        const list_of_desired_stocks=stockMarket.stocks.filter((stock)=>stock.currentPrice>givenPrice)
        return list_of_desired_stocks
        }
        else{const list_of_desired_stocks=stockMarket.stocks.filter((stock)=>stock.currentPrice<givenPrice)
            return list_of_desired_stocks   
}               }       
    else{  
    return "Try again with a number"
    }}
export function OperateOnStock(operation, identifier){
    return NaN
}
export function exit() {
    RunningFlag = false
}
export function last_update() {
    stockMarket.lastUpdated = Date()
}
export function menu(){
    const users_choice=readline.question(`
      prees 1 to search for a stock,
      prees 2 to Show all stocks above or below a given price,
      prees 3 to  Buy or sell a stock,
      prees 4 to exit
    `)
        return users_choice
}
export function Obtaining_search_terms(){
    const above_or_below=readline.question(`For a result above the price line prees true,
For a result below the price line prees false `)
        if(above_or_below==="true"){
            return true
        }
        else if(above_or_below==="false"){
            return false
        }
}
