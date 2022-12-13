import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../DateProvider/IDateProvider";

class DayjsDateProvider implements IDateProvider{
  compare(start_date: Date, end_date: Date): number {
    return dayjs(end_date).diff(start_date, "hours");
  }

} 

export {DayjsDateProvider}