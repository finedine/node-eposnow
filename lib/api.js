module.exports = [
  {
    version: "v2",
    endpoints: [
      {
        name: "Transaction",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "TransactionItem",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "CompleteTransaction",
        availables: ["create"]
      }
    ]
  },
  {
    version: "v4",
    endpoints: [
      {
        name: "Brand",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "Category",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "CategoryReferenceCode",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "Colour",
        availables: ["list", "get"]
      },
      {
        name: "Location",
        availables: ["list", "get"]
      },
      {
        name: "MultipleChoiceNote",
        availables: ["list", "get"]
      },
      {
        name: "MultipleChoiceProduct",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "MultipleChoiceProduct/Group",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "PopupNote",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "Product",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "ProductComposition",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "Tag",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "CustomerAddress",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "Customer",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "Customer/GetByEmail",
        availables: ["get"]
      },
      {
        name: "CustomerPoints",
        availables: ["create"]
      },
      {
        name: "CustomerReferenceCode",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "DiscountReason",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "Report/AverageProductSales",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "RefundReason",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "TaxGroup",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "TenderType",
        availables: ["list", "get", "create"]
      },
      {
        name: "Transaction",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "Transaction/Validate",
        availables: ["create"]
      },
      {
        name: "TransactionReferenceCode",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "Role",
        availables: ["list", "get"]
      },
      {
        name: "Staff",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "StaffReferenceCode",
        availables: ["list", "get", "create", "update", "delete"]
      },
      {
        name: "TablePlan",
        availables: ["list", "get"]
      }
    ]
  }
];
