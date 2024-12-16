import classNames from "classnames";
import { twMerge } from "tailwind-merge";

const cn = (...args: Parameters<typeof classNames>) =>
  twMerge(classNames(...args));
export default cn;
