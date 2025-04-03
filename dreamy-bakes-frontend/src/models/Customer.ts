export class Customer {
    customerId: string;
    customerName: string;
    address: string;
    contactNum: string;
   
    constructor(customerId: string, customerName: string, address: string , contactNum: string) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.address = address;
        this.contactNum = contactNum;
    }
}
