import { ShipRegisterSurvey, ShipRegisterSurveyResultSQL } from "@/types/shipRegisterResult";
import {format} from 'date-fns';

function formatSurveyDate(dayVal:string, monthVal: string, yearVal: string): string {
  // Parse the string values into numbers
  const day = parseInt(dayVal, 10);
  const month = parseInt(monthVal, 10);
  const year = parseInt(yearVal, 10);

  // Create a Date object. We subtract 1 from the month because it's 0-indexed.
  const date = new Date(year, month - 1, day);

  // Format the date into the desired 'dd MMM yyyy' string
  return format(date, 'dd MMM yyyy');
}

export default function formatSurvey(data: ShipRegisterSurveyResultSQL[]): ShipRegisterSurvey[]{
    return data.map(prop => {
        const lastdate = formatSurveyDate(prop.TGPL, prop.BLPL, prop.THPL)
        const duedate = formatSurveyDate(prop.TGPN1, prop.BLPN1, prop.THPN1)
        
        return {
            jenis: prop.KOSUR.charAt(0) === "S" ? "STATUTORIA" : "KLAS",
            jenissurvey: prop.JSUR1,
            duedate,
            lastdate,
            postponeddate: null,
            rangedate: null,
            ...prop,
        }
    })
}