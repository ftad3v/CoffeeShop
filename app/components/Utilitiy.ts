export class DateFormatter {
    locale:  Intl.LocalesArgument = "en-US";

   constructor(newLocale?:  Intl.LocalesArgument) {
        this.locale = newLocale
    }

    public getFullDate() : string {
        const optionYear: Intl.DateTimeFormatOptions = {
            year: "numeric",
          };
          const optionMonth: Intl.DateTimeFormatOptions = {
            month: "long",
          };
          const optionDay: Intl.DateTimeFormatOptions = {
            day: "numeric",
          };
          const optionWeek: Intl.DateTimeFormatOptions = {
            weekday: "long",
          };
          const Year = new Date().toLocaleString(this.locale, optionYear);
          const Month = new Date().toLocaleString(this.locale, optionMonth);
          const Day = new Date().toLocaleString(this.locale, optionDay);
          const Week = new Date().toLocaleString(this.locale, optionWeek);
          const date = Week + " " + Day + " " + Month + " " + Year;

          return date
    }

    public getDate() : string {
        const optionYear: Intl.DateTimeFormatOptions = {
            year: "numeric",
          };
          const optionMonth: Intl.DateTimeFormatOptions = {
            month: "long",
          };
          const optionDay: Intl.DateTimeFormatOptions = {
            day: "numeric",
          };
          
          const Year = new Date().toLocaleString(this.locale, optionYear);
          const Month = new Date().toLocaleString(this.locale, optionMonth);
          const Day = new Date().toLocaleString(this.locale, optionDay);
          const date = Day + " " + Month + " " + Year;

          return date
    }
    
}
