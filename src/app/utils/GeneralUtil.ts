
export class GeneralUtil {
    static getDateWithTimeZone(strDate: string) {
      if (strDate) {
        var date = new Date(parseInt(strDate));
        let hours = date.getHours();
        let minutes:any = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = (hours != 0) ? hours : 12;
        minutes = (minutes < 10) ? '0'+minutes : minutes;
        return date.toLocaleDateString() + " " + hours + ':' + minutes + ' ' + ampm;
      }
      return null;
    }
   }