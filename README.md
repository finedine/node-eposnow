[![NPM version][npm-image]][npm-url]

# node-eposnow

Simple Node.js wrapper for [EPOSNOW API](https://developer.eposnowhq.com/Setup).

## Getting Started

### Installation

---

```sh
npm install node-eposnow
```

### Setup

Basically require `node-eposnow` and create a new instance with `new NodeEPOSNow()`.

If you already have your `token`, then you can create instance using `new NodeEPOSNow(accessToken)` OR you can set token using `eposnow.setAccessToken(accessToken)`.

### Example

---

```javascript
const NodeEPOSNow = require("node-eposnow");
..
const eposnow = new NodeEPOSNow(accessToken);
// OR
const eposnow = new NodeEPOSNow();
eposnow.setAccessToken(accessToken);
const brands = await eposnow.v4.brand.list();
..
```

### Pagination

Each LIST request supports 200 response items per page.
You can retrieve next page with passing an object includes 'page' key.

#### Example

---

```javascript
const brands = await eposnow.v4.brand.list({page: 2});
..
```

## Available Functions

| Endpoint                       | Function | Usage                                      | Detail                                                                                |
| ------------------------------ | -------- | ------------------------------------------ | ------------------------------------------------------------------------------------- |
| Authentication                 |          | authenticate(api_key, api_secret)          | [Detail](https://developer.eposnowhq.com/Docs/Authentication)                         |
| v2/Transaction                 | LIST     | v2.transaction.list()                      | [Detail](https://developer.eposnowhq.com/Docs/v2/index#!/Transaction)                 |
| v2/Transaction                 | GET      | v2.transaction.get(Id)                     | [Detail](https://developer.eposnowhq.com/Docs/v2/index#!/Transaction)                 |
| v2/Transaction                 | CREATE   | v2.transaction.create(body)                | [Detail](https://developer.eposnowhq.com/Docs/v2/index#!/Transaction)                 |
| v2/Transaction                 | UPDATE   | v2.transaction.update(body)                | [Detail](https://developer.eposnowhq.com/Docs/v2/index#!/Transaction)                 |
| v2/Transaction                 | DELETE   | v2.transaction.delete(body)                | [Detail](https://developer.eposnowhq.com/Docs/v2/index#!/Transaction)                 |
| v2/TransactionItem             | LIST     | v2.transactionitem.list()                  | [Detail](https://developer.eposnowhq.com/Docs/v2/index#!/TransactionItem)             |
| v2/TransactionItem             | GET      | v2.transactionitem.get(Id)                 | [Detail](https://developer.eposnowhq.com/Docs/v2/index#!/TransactionItem)             |
| v2/TransactionItem             | CREATE   | v2.transactionitem.create(body)            | [Detail](https://developer.eposnowhq.com/Docs/v2/index#!/TransactionItem)             |
| v2/TransactionItem             | UPDATE   | v2.transactionitem.update(body)            | [Detail](https://developer.eposnowhq.com/Docs/v2/index#!/TransactionItem)             |
| v2/TransactionItem             | DELETE   | v2.transactionitem.delete(body)            | [Detail](https://developer.eposnowhq.com/Docs/v2/index#!/TransactionItem)             |
| v4/Brand                       | LIST     | v4.brand.list()                            | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Brand)                       |
| v4/Brand                       | GET      | v4.brand.get(Id)                           | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Brand)                       |
| v4/Brand                       | CREATE   | v4.brand.create(body)                      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Brand)                       |
| v4/Brand                       | UPDATE   | v4.brand.update(body)                      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Brand)                       |
| v4/Brand                       | DELETE   | v4.brand.delete(body)                      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Brand)                       |
| v4/Category                    | LIST     | v4.category.list()                         | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Category)                    |
| v4/Category                    | GET      | v4.category.get(Id)                        | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Category)                    |
| v4/Category                    | CREATE   | v4.category.create(body)                   | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Category)                    |
| v4/Category                    | UPDATE   | v4.category.update(body)                   | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Category)                    |
| v4/Category                    | DELETE   | v4.category.delete(body)                   | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Category)                    |
| v4/CategoryReferenceCode       | LIST     | v4.categoryreferencecode.list()            | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/CategoryReferenceCode)       |
| v4/CategoryReferenceCode       | GET      | v4.categoryreferencecode.get(Id)           | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/CategoryReferenceCode)       |
| v4/CategoryReferenceCode       | CREATE   | v4.categoryreferencecode.create(body)      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/CategoryReferenceCode)       |
| v4/CategoryReferenceCode       | UPDATE   | v4.categoryreferencecode.update(body)      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/CategoryReferenceCode)       |
| v4/CategoryReferenceCode       | DELETE   | v4.categoryreferencecode.delete(body)      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/CategoryReferenceCode)       |
| v4/Colour                      | LIST     | v4.colour.list()                           | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Colour)                      |
| v4/Colour                      | GET      | v4.colour.get(Id)                          | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Colour)                      |
| v4/Location                    | LIST     | v4.location.list()                         | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Location)                      |
| v4/Location                    | GET      | v4.location.get(Id)                        | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Location)                      |
| v4/MultipleChoiceNote          | LIST     | v4.multiplechoicenote.list()               | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/MultipleChoiceNote)          |
| v4/MultipleChoiceNote          | GET      | v4.multiplechoicenote.get(Id)              | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/MultipleChoiceNote)          |
| v4/MultipleChoiceProduct       | LIST     | v4.multiplechoiceproduct.list()            | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/MultipleChoiceProduct)       |
| v4/MultipleChoiceProduct       | GET      | v4.multiplechoiceproduct.get(Id)           | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/MultipleChoiceProduct)       |
| v4/MultipleChoiceProduct       | CREATE   | v4.multiplechoiceproduct.create(body)      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/MultipleChoiceProduct)       |
| v4/MultipleChoiceProduct       | UPDATE   | v4.multiplechoiceproduct.update(body)      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/MultipleChoiceProduct)       |
| v4/MultipleChoiceProduct       | DELETE   | v4.multiplechoiceproduct.delete(body)      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/MultipleChoiceProduct)       |
| v4/MultipleChoiceProduct/Group | LIST     | v4.multiplechoiceproductgroup.list()       | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/MultipleChoiceProduct/Group) |
| v4/MultipleChoiceProduct/Group | GET      | v4.multiplechoiceproductgroup.get(Id)      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/MultipleChoiceProduct/Group) |
| v4/MultipleChoiceProduct/Group | CREATE   | v4.multiplechoiceproductgroup.create(body) | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/MultipleChoiceProduct/Group) |
| v4/MultipleChoiceProduct/Group | UPDATE   | v4.multiplechoiceproductgroup.update(body) | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/MultipleChoiceProduct/Group) |
| v4/MultipleChoiceProduct/Group | DELETE   | v4.multiplechoiceproductgroup.delete(body) | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/MultipleChoiceProduct/Group) |
| v4/PopupNote                   | LIST     | v4.popupnote.list()                        | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/PopupNote)                   |
| v4/PopupNote                   | GET      | v4.popupnote.get(Id)                       | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/PopupNote)                   |
| v4/PopupNote                   | CREATE   | v4.popupnote.create(body)                  | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/PopupNote)                   |
| v4/PopupNote                   | UPDATE   | v4.popupnote.update(body)                  | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/PopupNote)                   |
| v4/PopupNote                   | DELETE   | v4.popupnote.delete(body)                  | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/PopupNote)                   |
| v4/Product                     | LIST     | v4.product.list()                          | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Product)                     |
| v4/Product                     | GET      | v4.product.get(Id)                         | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Product)                     |
| v4/Product                     | CREATE   | v4.product.create(body)                    | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Product)                     |
| v4/Product                     | UPDATE   | v4.product.update(body)                    | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Product)                     |
| v4/Product                     | DELETE   | v4.product.delete(body)                    | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Product)                     |
| v4/ProductComposition          | LIST     | v4.productcomposition.list()               | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/ProductComposition)          |
| v4/ProductComposition          | GET      | v4.productcomposition.get(Id)              | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/ProductComposition)          |
| v4/ProductComposition          | CREATE   | v4.productcomposition.create(body)         | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/ProductComposition)          |
| v4/ProductComposition          | UPDATE   | v4.productcomposition.update(body)         | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/ProductComposition)          |
| v4/ProductComposition          | DELETE   | v4.productcomposition.delete(body)         | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/ProductComposition)          |
| v4/Tag                         | LIST     | v4.tag.list()                              | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Tag)                         |
| v4/Tag                         | GET      | v4.tag.get(Id)                             | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Tag)                         |
| v4/Tag                         | CREATE   | v4.tag.create(body)                        | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Tag)                         |
| v4/Tag                         | UPDATE   | v4.tag.update(body)                        | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Tag)                         |
| v4/Tag                         | DELETE   | v4.tag.delete(body)                        | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Tag)                         |
| v4/CustomerAddress             | LIST     | v4.customeraddress.list()                  | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/CustomerAddress)             |
| v4/CustomerAddress             | GET      | v4.customeraddress.get(Id)                 | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/CustomerAddress)             |
| v4/CustomerAddress             | CREATE   | v4.customeraddress.create(body)            | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/CustomerAddress)             |
| v4/CustomerAddress             | UPDATE   | v4.customeraddress.update(body)            | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/CustomerAddress)             |
| v4/CustomerAddress             | DELETE   | v4.customeraddress.delete(body)            | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/CustomerAddress)             |
| v4/Customer                    | LIST     | v4.customer.list()                         | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Customer)                    |
| v4/Customer                    | GET      | v4.customer.get(Id)                        | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Customer)                    |
| v4/Customer                    | CREATE   | v4.customer.create(body)                   | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Customer)                    |
| v4/Customer                    | UPDATE   | v4.customer.update(body)                   | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Customer)                    |
| v4/Customer                    | DELETE   | v4.customer.delete(body)                   | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Customer)                    |
| v4/Customer/GetByEmail         | GET      | v4.customer.get(email=<email>)                    | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Customer/CustomerGETByemailAndpage)                    |
| v4/CustomerPoints              | CREATE   | v4.customerpoints.create(body)             | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/CustomerPoints)              |
| v4/CustomerReferenceCode       | LIST     | v4.customerreferencecode.list()            | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/CustomerReferenceCode)       |
| v4/CustomerReferenceCode       | GET      | v4.customerreferencecode.get(Id)           | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/CustomerReferenceCode)       |
| v4/CustomerReferenceCode       | CREATE   | v4.customerreferencecode.create(body)      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/CustomerReferenceCode)       |
| v4/CustomerReferenceCode       | UPDATE   | v4.customerreferencecode.update(body)      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/CustomerReferenceCode)       |
| v4/CustomerReferenceCode       | DELETE   | v4.customerreferencecode.delete(body)      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/CustomerReferenceCode)       |
| v4/DiscountReason              | LIST     | v4.discountreason.list()                   | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/DiscountReason)              |
| v4/DiscountReason              | GET      | v4.discountreason.get(Id)                  | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/DiscountReason)              |
| v4/DiscountReason              | CREATE   | v4.discountreason.create(body)             | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/DiscountReason)              |
| v4/DiscountReason              | UPDATE   | v4.discountreason.update(body)             | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/DiscountReason)              |
| v4/DiscountReason              | DELETE   | v4.discountreason.delete(body)             | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/DiscountReason)              |
| v4/Report/AverageProductSales  | LIST     | v4.reportaverageproductsales.list()        | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Report/AverageProductSales)  |
| v4/Report/AverageProductSales  | GET      | v4.reportaverageproductsales.get(Id)       | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Report/AverageProductSales)  |
| v4/Report/AverageProductSales  | CREATE   | v4.reportaverageproductsales.create(body)  | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Report/AverageProductSales)  |
| v4/Report/AverageProductSales  | UPDATE   | v4.reportaverageproductsales.update(body)  | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Report/AverageProductSales)  |
| v4/Report/AverageProductSales  | DELETE   | v4.reportaverageproductsales.delete(body)  | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Report/AverageProductSales)  |
| v4/RefundReason                | LIST     | v4.refundreason.list()                     | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/RefundReason)                |
| v4/RefundReason                | GET      | v4.refundreason.get(Id)                    | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/RefundReason)                |
| v4/RefundReason                | CREATE   | v4.refundreason.create(body)               | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/RefundReason)                |
| v4/RefundReason                | UPDATE   | v4.refundreason.update(body)               | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/RefundReason)                |
| v4/RefundReason                | DELETE   | v4.refundreason.delete(body)               | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/RefundReason)                |
| v4/TaxGroup                    | LIST     | v4.taxgroup.list()                         | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/TaxGroup)                    |
| v4/TaxGroup                    | GET      | v4.taxgroup.get(Id)                        | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/TaxGroup)                    |
| v4/TaxGroup                    | CREATE   | v4.taxgroup.create(body)                   | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/TaxGroup)                    |
| v4/TaxGroup                    | UPDATE   | v4.taxgroup.update(body)                   | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/TaxGroup)                    |
| v4/TaxGroup                    | DELETE   | v4.taxgroup.delete(body)                   | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/TaxGroup)                    |
| v4/TenderType                  | LIST     | v4.tendertype.list()                       | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/TenderType)                  |
| v4/TenderType                  | GET      | v4.tendertype.get(Id)                      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/TenderType)                  |
| v4/TenderType                  | CREATE   | v4.tendertype.create(body)                 | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/TenderType)                  |
| v4/Transaction                 | LIST     | v4.transaction.list()                      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Transaction)                 |
| v4/Transaction                 | GET      | v4.transaction.get(Id)                     | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Transaction)                 |
| v4/Transaction                 | CREATE   | v4.transaction.create(body)                | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Transaction)                 |
| v4/Transaction                 | UPDATE   | v4.transaction.update(body)                | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Transaction)                 |
| v4/Transaction                 | DELETE   | v4.transaction.delete(body)                | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Transaction)                 |
| v4/TransactionReferenceCode    | LIST     | v4.transactionreferencecode.list()         | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/TransactionReferenceCode)    |
| v4/TransactionReferenceCode    | GET      | v4.transactionreferencecode.get(Id)        | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/TransactionReferenceCode)    |
| v4/TransactionReferenceCode    | CREATE   | v4.transactionreferencecode.create(body)   | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/TransactionReferenceCode)    |
| v4/TransactionReferenceCode    | UPDATE   | v4.transactionreferencecode.update(body)   | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/TransactionReferenceCode)    |
| v4/TransactionReferenceCode    | DELETE   | v4.transactionreferencecode.delete(body)   | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/TransactionReferenceCode)    |
| v4/Role                        | LIST     | v4.role.list()                             | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Role)                        |
| v4/Role                        | GET      | v4.role.get(Id)                            | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Role)                        |
| v4/Staff                       | LIST     | v4.staff.list()                            | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Staff)                       |
| v4/Staff                       | GET      | v4.staff.get(Id)                           | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Staff)                       |
| v4/Staff                       | CREATE   | v4.staff.create(body)                      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Staff)                       |
| v4/Staff                       | UPDATE   | v4.staff.update(body)                      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Staff)                       |
| v4/Staff                       | DELETE   | v4.staff.delete(body)                      | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/Staff)                       |
| v4/StaffReferenceCode          | LIST     | v4.staffreferencecode.list()               | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/StaffReferenceCode)          |
| v4/StaffReferenceCode          | GET      | v4.staffreferencecode.get(Id)              | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/StaffReferenceCode)          |
| v4/StaffReferenceCode          | CREATE   | v4.staffreferencecode.create(body)         | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/StaffReferenceCode)          |
| v4/StaffReferenceCode          | UPDATE   | v4.staffreferencecode.update(body)         | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/StaffReferenceCode)          |
| v4/StaffReferenceCode          | DELETE   | v4.staffreferencecode.delete(body)         | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/StaffReferenceCode)          |
| v4/TablePlan                   | LIST     | v4.tableplan.list()                        | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/TablePlan)                   |
| v4/TablePlan                   | GET      | v4.tableplan.get(Id)                       | [Detail](https://developer.eposnowhq.com/Docs/v4/index#!/TablePlan)                   |

## Contributing

If you want to contribute to a project and make it better, your help is very welcome.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

[npm-image]: https://img.shields.io/npm/v/node-eposnow.svg?style=flat
[npm-url]: https://www.npmjs.com/package/node-eposnow
