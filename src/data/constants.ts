export interface Turnus {
    name: string;
    startDate: Date;
    endDate: Date;
    displayDate: string; 
  }
  
  export const turnus1: Turnus = {
    name: "turnus1",
    startDate: new Date(2026, 7, 17), // 17. 8. 2026
    endDate: new Date(2026, 7, 20), // 20. 8. 2026
    displayDate: "17. 8. - 20. 8. 2026",
  };
  
  export const turnus2: Turnus = {
    name: "turnus2",
    startDate: new Date(2026, 7, 24), // 24. 8. 2026
    endDate: new Date(2026, 7, 27), // 27. 8. 2026
    displayDate: "24. 8. - 27. 8. 2026",
  };

  // Původní: new Date(2026, 6, 20, 15, 0, 0); 
  // Problém: Vytvořilo by to 15:00 v lokálním čase uživatele.
  // Řešení: Definujeme to pomocí Date.UTC(rok, měsíc_index, den, hodina_v_UTC)
  // 15:00 letního času v ČR (UTC+2) je 13:00 v UTC.
  // POZOR: Měsíce jsou indexované od 0 (6 = Červenec)
  export const REGISTRATION_START_DATE = new Date(Date.UTC(2026, 6, 20, 13, 0, 0)); 
  export const REGISTRATION_END_DATE = new Date(Date.UTC(2026, 7, 24, 13, 0, 0)); 
  
  export const REGISTRATION_START_DATE_TEXT: string = "20. 7.";
  export const REGISTRATION_START_TIME_TEXT: string = "v 15:00";

  // 14:00 letního času v ČR = 12:00 v UTC
  export const PRE_REGISTRATION_END = new Date(Date.UTC(2026, 6, 20, 12, 0, 0));
  