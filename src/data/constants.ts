export interface Turnus {
    name: string;
    startDate: Date;
    endDate: Date;
    displayDate: string; 
  }
  
  export const turnus1: Turnus = {
    name: "turnus1",
    startDate: new Date(2025, 7, 17), // 17. 8. 2026
    endDate: new Date(2026, 7, 20), // 20. 8. 2026
    displayDate: "17. 8. - 20. 8. 2026",
  };
  
  export const turnus2: Turnus = {
    name: "turnus2",
    startDate: new Date(2025, 7, 24), // 24. 8. 2026
    endDate: new Date(2026, 7, 27), // 27. 8. 2026
    displayDate: "24. 8. - 27. 8. 2026",
  };

  export const REGISTRATION_START_DATE = new Date(2026, 6, 17, 15, 0, 0); // 17. 7. 2026, 15:00:00
  export const REGISTRATION_END_DATE = new Date(2026, 7, 28, 15, 0, 0); // 24. 8. 2026, 15:00:00
  export const REGISTRATION_START_DATE_TEXT: string = "17. 7.";
  export const REGISTRATION_START_TIME_TEXT: string = "v 15:00";

  export const PRE_REGISTRATION_END = new Date(2025, 6, 17, 14, 0, 0); // 17. 7. 2026, 14:00:00
  