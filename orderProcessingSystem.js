function createOrderManager()
{
    const orders=[];

    return
    {
        //add orders
        addOrder(order)
        {
            orders.push(order);
        }

        //update the orders
        updateOrder(id,newStatus)
        {
            if(id===this.id && orderStatus === this.status)
            {
                orderStatus==newStatus;
            }
        }

        //fiter orders based on status
        filterOrders(orderStatus)
        {
            return filteredOrders= orders.filter(order=> order.status==orderStatus);
        }

        //sorting the orders
        sortOrders(by)
        {
            if(by==date)
            {
                return filteredOrders.sort((a,b)=>a.date-b.date);
            }

            else if(by==orderStatus)
            {
                return filteredOrders.sort((a,b)=>a.orderStatus.localCompare(b.orderStatus));
            }
        }

        //order summary
        generateOrderSummary()
        {
            return totalRevenue=orders.reduce((acc,cur)=>acc+cur,0);
        }


    }

    //json
    const details=orders.JSON.stringify();

}

createOrderManager();