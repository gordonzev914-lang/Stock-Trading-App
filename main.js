import {searchStock} from "./utils.js"
import {filterStocksByPrice} from "./utils.js"
import { exit } from "./utils.js"
import {menu} from "./utils.js"
import readline from "readline-sync"
import {Obtaining_search_terms} from "./utils.js"
import {stockMarket} from "./data.js"
import { last_update } from "./utils.js"
function run(){
    let RunningFlag=true
    while (RunningFlag){
        const users_choice=menu();
            switch (users_choice) {
                case "1": {
                const specific_stock=readline.question("enter stock name or id")
                const the_stock=searchStock(specific_stock)
                console.log(the_stock)
                    break;
                }
                case "2": {
                const price_line=parseInt(readline.question("enter price"));
                const above_or_below=Obtaining_search_terms();
                console.log(above_or_below)
                const list_of_desired_stocks=filterStocksByPrice(price_line,above_or_below)
                console.table(list_of_desired_stocks)
                        break;
                    }
                    case "3": {
                    last_update()
                    console.log(stockMarket.lastUpdated)
                        break;
                    }
                    case "4":{
                        exit()
                        break
                    }
    }
    }
}
