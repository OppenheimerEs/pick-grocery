import {data} from './data'

const reducer = (state, action) => {
    let x = []
    data.map(product => {
        product.details.map(detail => {
            detail.details.map(singleitem => {
                x.push(singleitem)
            })
        })
    })

    if (action.type === 'INCREASE') {
        let tempCart = state.prods.map(item => {
            if (item.id === action.payload) {
                return {
                    ...item,
                    amount: item.amount + 1
                }
            }
            return item;
        })
        return {
            ...state,
            prods: tempCart
        }
    }

    if (action.type === 'DECREASE') {
        let tempCart = state.prods.map(item => {
            if (item.id === action.payload) {
                return {
                    ...item,
                    amount: item.amount - 1
                }
            }
            if (item.amount === 0) {
                state.amount = state.amount - 1
            }
            return item;
        }).filter(item => item.amount !== 0)
        return {
            ...state,
            prods: tempCart
        }
    }
    
    if (action.type === 'ADD_ITEM') {
        let newItem = x.find(item => item.id === action.payload)
        let con = state.prods.find(item => item.id === action.payload)
        if (!con) {
            return {
                ...state,
                // amount: state.amount + 1,
                prods: [...state.prods, newItem],
            }
        }
    }

    if (action.type === 'REMOVE_ITEM') {
        let newCart = state.prods.filter(item => item.id !== action.payload)
        return {
            ...state,
            prods: newCart
        }
    }

    if (action.type === 'GET_TOTAL') {
        let {total} = state.prods.reduce((cartTotal, cartItem) => {
            const {price, amount, deal} = cartItem;
            let x;
            if (deal) {
                x = (price * (100 - deal)) / 100
            } else {
                x = price
            }
            const totalPrice = x * amount;
            cartTotal.total += totalPrice;
            return cartTotal;
        }, {
            total: 0,
        })
        
        total = parseFloat(total.toFixed(2));

        return {
            ...state,
            total,
        }

    }
    
    return state;
}

export default reducer;