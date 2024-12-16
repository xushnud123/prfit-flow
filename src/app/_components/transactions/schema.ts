import * as Yup from "yup";

export const addTransactions = Yup.object({
  amount: Yup.number().required("Amount is required"),
  type: Yup.string().required("Type is required"),
  currency: Yup.string().required("Currency is required"),
  category: Yup.string().required("Category is required"),
  status: Yup.string().required("Status is required"),
});
