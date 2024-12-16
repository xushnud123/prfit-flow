import get from "lodash.get";
import { ConversionType } from "./types";

export const ConversionMappers = (data: any): ConversionType => ({
  result: get(data, "result"),
  documentation: get(data, "documentation"),
  terms_of_use: get(data, "terms_of_use"),
  time_last_update_unix: get(data, "time_last_update_unix"),
  time_last_update_utc: get(data, "time_last_update_utc:"),
  time_next_update_unix: get(data, "time_next_update_unix"),
  time_next_update_utc: get(data, "time_next_update_utc"),
  base_code: get(data, "base_code"),
  conversion_rates: {
    USD: get(data, "conversion_rates.USD"),
    EUR: get(data, "conversion_rates.EUR"),
    UZS: get(data, "conversion_rates.UZS"),
  },
});
